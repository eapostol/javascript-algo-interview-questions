class Solution {

    /**
     * @param String $ransomNote
     * @param String $magazine
     * @return Boolean
     */
    function canConstruct($ransomNote, $magazine) {
        
        $charArr = [];
        for ($i = 0; $i < strlen($magazine); $i++) {
            $charArr[$magazine[$i]]++;
        }
        for ($i = 0; $i < strlen($ransomNote); $i++) {
            if ($charArr[$ransomNote[$i]] == 0) {
                return false;
            }
            $charArr[$ransomNote[$i]]--;
        }
        return true;
    }
}