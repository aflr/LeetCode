class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>(nums.length);
        for (int n : nums)
            set.add(n);
        return nums.length != set.size();
    }
}
