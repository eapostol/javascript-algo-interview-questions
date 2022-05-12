class Solution {
    

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s) {
        $roman = [
            'I' => 1,
            'V' => 5,
            'X' => 10,
            'L' => 50,
            'C' => 100,
            'D' => 500,
            'M' => 1000
        ];
        
        $int = 0;
        
        for ($i = 0; $i < strlen($s); $i++) {
            
            $int += $roman[$s[$i]];
            
            if ($i > 0) {
                if ($s[$i - 1] === 'I' && ($s[$i] === 'V' || $s[$i] === 'X')) {
                    $int -= 2;
                }

                if ($s[$i - 1] === 'X' && ($s[$i] === 'L' || $s[$i] === 'C')) {
                    $int -= 20;
                }

                if ($s[$i - 1] === 'C' && ($s[$i] === 'D' || $s[$i] === 'M')) {
                    $int -= 200;
                }
            }
            
        }
        return $int;
    }
}