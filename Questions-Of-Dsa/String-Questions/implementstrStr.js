// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 
var strStr = function(haystack, needle) {
    if (needle === "") return 0;  // Edge case: empty needle
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i;  // Found the needle
        }
    }
    return -1;  // Needle not found
};
