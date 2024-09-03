// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    let string = "";
    for(let i=0; i<strs[0].length; i++){
        let temp = strs[0][i];
        for(let j=1; j<strs.length; j++){
            if(strs[j][i] !== temp){
                return string;
            }
        }
        string += temp;
    }
    return string;
 };