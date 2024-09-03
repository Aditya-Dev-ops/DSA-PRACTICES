// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

var firstUniqChar = function(s) {
    const object = {};
    for(let i=0; i<s.length; i++){
       object[s[i]] = object[s[i]]? true : i+1;
   }
   for(let j=0; j<s.length; j++){
       if(object[s[j]] !== true){
           return (object[s[j]]-1);
       }
   }
    return -1;
};


//better way 
var firstUniqChar = function(s){
    for(let i=0; i<s.length; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return i;
        }
        return -1;
    }
};