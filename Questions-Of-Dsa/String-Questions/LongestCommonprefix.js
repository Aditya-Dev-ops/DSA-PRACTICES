// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 


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

 console.log(longestCommonPrefix(["flower","flow","floight"]));