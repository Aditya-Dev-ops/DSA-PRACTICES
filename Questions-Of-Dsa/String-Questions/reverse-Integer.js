// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

var reverse = function(x) {
        let ans = String(+Math.abs(x)).split('').reverse().join('');
        if(ans>Math.pow(2,31)) ans = 0;
        return x < 0 ? -1 * ans : ans;
};
