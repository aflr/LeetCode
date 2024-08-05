class Solution {
    public String kthDistinct(String[] arr, int k) {
        Map<String, Integer> occs = new LinkedHashMap<>();
        for (String str : arr)
            occs.put(str, occs.getOrDefault(str, 0) + 1);
        return occs.entrySet().stream()
                .filter(en -> en.getValue() == 1)
                .skip(k - 1).findFirst()
                .orElse(Map.entry("", 0)).getKey();
    }
}
