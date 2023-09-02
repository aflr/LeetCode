class Solution {
	public List<String> twoEditWords(String[] q, String[] d) {
		List<String> l = new ArrayList<>();
		int ws = q[0].length();
		for (int i = 0; i < q.length; i++) {
			for (int j = 0, c = 0; j < d.length; c=0, j++) {
				for (int k = 0; k < ws && c < 3; k++) {
					if (q[i].charAt(k) != d[j].charAt(k)) {
						c++;
					}
				}
				if (c < 3) {
					l.add(q[i]);
					j = d.length;
				}
			}
		}
		return l;
	}
}
