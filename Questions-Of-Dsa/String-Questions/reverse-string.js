
var reverseString = function(s) {
     for(let i=0; i< Math.floor(s.length/2); i++){
         [s[i] , s[s.length-(i+1)]] = [s[s.length-(i+1)] , s[i]];
     }
    return s;
};
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]