import java.util.regex.Matcher;
import java.util.regex.Pattern;

class Solution {
    public String fractionAddition(String expression) {
        Fraction f = Fraction.ZERO;
        Matcher m = Pattern.compile("[+-]?[0-9]+/[+-]?[0-9]+").matcher(expression);
        while (m.find())
            f = Fraction.add(f, new Fraction(m.group()));
        return f.toString();
    }

    private static class Fraction {
        public static final Fraction ZERO = new Fraction(0, 1);

        private long num;
        private long den;

        public Fraction(long num, long den) {
            if (den < 0) {
                num *= -1;
                den *= -1;
            }
            this.num = num;
            this.den = den;
        }

        public Fraction(String s) {
            String[] split = s.split("/");
            num = Integer.parseInt(split[0]);
            den = Integer.parseInt(split[1]);
        }

        public static Fraction add(Fraction f1, Fraction f2) {
            long gcd = gcd(f1.den, f2.den);
            long lcm = f1.den / gcd * f2.den;
            long num = f1.num * (lcm / f1.den) + f2.num * (lcm / f2.den);
            long d = gcd(num, lcm);
            return new Fraction(num / d, lcm / d);
        }

        public String toString() {
            return num + "/" + den;
        }
    }

    private static long gcd(long n1, long n2) {
        return n2 == 0 ? n1 : gcd(n2, n1 % n2);
    }
}
