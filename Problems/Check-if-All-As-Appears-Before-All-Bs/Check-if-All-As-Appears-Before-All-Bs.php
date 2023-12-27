class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function checkString($s) {
        return preg_match("/^a*b*$/", $s);
    }
}
