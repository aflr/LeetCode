class Solution {
    public int minOperations(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++)
            map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);
        int ops = 0;
        for (Map.Entry<Integer, Integer> e : map.entrySet()) {
            int v = e.getValue();
            if (v == 1)
                return -1;
            ops += v / 3 + (v % 3 != 0 ? 1 : 0);
        }
        return ops;
    }
}
