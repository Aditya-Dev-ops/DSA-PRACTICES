// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.


var reverseString = function(s) {
     for(let i=0; i< Math.floor(s.length/2); i++){
         [s[i] , s[s.length-(i+1)]] = [s[s.length-(i+1)] , s[i]];
     }
    return s;
};
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]