/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
    if (b === 0) {
       return a;
    } else{
       return getSum(a ^ b, (a & b) << 1);
    }
   };

// 思路
//https://leetcode.com/problems/sum-of-two-integers/discuss/1561732/Two%27s-complement-solution-very-detailed-explanation