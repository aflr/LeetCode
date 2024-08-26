/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    public List<Integer> postorder(Node root) {
        if (root == null)
            return List.of();
        List<Integer> out = new ArrayList<>();
        for (Node child : root.children)
            out.addAll(postorder(child));
        out.add(root.val);
        return out;
    }
}
