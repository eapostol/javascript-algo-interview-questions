class Solution {

    /**
     * @param Integer[][] $mat
     * @param Integer $k
     * @return Integer[]
     */
    function kWeakestRows($mat, $k) {
        $data = [];
        $q = new \SplPriorityQueue();
        foreach($mat as $key=>$row) {
            $q->insert($key, -1 * array_sum($row) - $key/100000);
        }
        $result = [];
        for($i=0;$i<$k;$i++) {
            $result[] = $q->extract();
        }
    
        return $result;
    }
}