class Solution {
    public boolean isAnagram(String s, String t) {
        Map<Character, Integer> sm = new HashMap<>(), tm = new HashMap<>();
        for (char c : s.toCharArray()) {
            sm.putIfAbsent(c, 0);
            sm.put(c, sm.get(c) + 1);
        }
        for (char c : t.toCharArray()) {
            tm.putIfAbsent(c, 0);
            tm.put(c, tm.get(c) + 1);
        }
        return sm.equals(tm);
    }
}
