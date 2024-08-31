var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const object = {};
    for(let i=0; i<s.length; i++){
    if(t.indexOf(s[i]) === -1){
        return false;
    }
    object[s[i]] = object[s[i]] ? object[s[i]]+1 : 1;
    object[t[i]] = object[t[i]]?object[t[i]]-1:-1;
}
   for(let key in object){
    if(object[key] !== 0){
        return false;
    }
   }
   return true;
};

console.log(isAnagram("car",  "cat"));