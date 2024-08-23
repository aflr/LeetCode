class Solution {
    private static Map<Integer, Integer> steps = new HashMap<>() {{ putAll(Map.of(1, 1, 2, 2)); }};

    public int climbStairs(int n) {
        if (steps.containsKey(n))
            return steps.get(n);
        int s = climbStairs(n - 2) + climbStairs(n - 1);
        steps.put(n, s);
        return s;
    }
}
