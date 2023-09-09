class Solution {
    public int singleNumber(int[] nums) {
        Set<Integer> set = new HashSet<>(nums.length);
        for (int n : nums)
            if (!set.add(n))
                set.remove(n);
        return set.iterator().next();
    }
}
