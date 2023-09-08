class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> pascal = new ArrayList<>(numRows);
        if (numRows >= 1)
            pascal.add(new ArrayList<>(){{add(1);}});
        for (int i = 1; i < numRows; i++) {
            var prev = pascal.get(i - 1);
            var curr = new ArrayList<Integer>(prev.size() + 1);
            curr.add(1);
            for (int j = 0; j < prev.size() - 1; j++)
                curr.add(prev.get(j) + prev.get(j + 1));
            curr.add(1);
            pascal.add(curr);
        }
        return pascal;
    }
}
