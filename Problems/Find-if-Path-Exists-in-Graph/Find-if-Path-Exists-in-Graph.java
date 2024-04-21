class Solution {
    public boolean validPath(int n, int[][] edges, int source, int destination) {
        Set<Integer> visited = new HashSet<>();
        Deque<Integer> remaining = new ArrayDeque<>();

        visited.add(source);
        for (int[] edge : edges) {
            if (edge[0] == source && remaining.offer(edge[1]))
                visited.add(edge[1]);
            if (edge[1] == source && remaining.offer(edge[0]))
                visited.add(edge[0]);
        }
        while (!remaining.isEmpty() && !visited.contains(destination)) {
            int vertex = remaining.poll();
            for (int[] edge : edges) {
                if (edge[0] == vertex && !visited.contains(edge[1])) {
                    remaining.offer(edge[1]);
                    visited.add(edge[1]);
                }
                if (edge[1] == vertex && !visited.contains(edge[0])) {
                    remaining.offer(edge[0]);
                    visited.add(edge[0]);
                }
            }
        }

        return visited.contains(destination);
    }
}
