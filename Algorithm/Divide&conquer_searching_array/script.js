function anagram(str1, str2){
if(str1.length !== str2.length) return false;
str1object ={}
for(let x=0; x<str1.length; x++){
    let letter = str1[x];
    str1object[letter] =(str1object[letter] || 0) +1
}
for(let i=0; i<str1.length; i++){
 let letter = str2[i];
 if(!str1object[letter]){
    return false;
 }
 else{
    str1object[letter] -=1;
 }
}
return true;
}

anagram('aaz','aza');