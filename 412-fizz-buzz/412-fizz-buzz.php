class Solution {

    /**
     * @param Integer $n
     * @return String[]
     */
    function fizzBuzz($n) {
        $arr = [];
        for ($i = 1; $i <= $n; $i++) {
            if (($i % 3 === 0) && ($i % 5 === 0)) {
                array_push($arr, "FizzBuzz");
                
            } elseif ($i % 5 === 0) {
                array_push($arr, "Buzz");
            
            } elseif ($i % 3 === 0) {
                array_push($arr, "Fizz");
                
            } else {
                array_push($arr, (string) $i);
            }
        }
        
        return $arr;
    }
}