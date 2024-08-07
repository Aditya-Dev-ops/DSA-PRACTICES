 /* SEARCHING STRING */
function searchingstring(longstr,checkstr){
    for(let i=0; i<longstr.length; i++){  
      for(j=0; j<checkstr.length; j++){
         if(longstr[i+j] !== checkstr[j]){
          break;
         }
         if(j === checkstr.length-1){
         console.log(`your string is matched ${checkstr} index no. of your input string ${i+j}`);
         i=longstr.length;
         };
    };
};
}
searchingstring('adiya hero it','her');

/* CHECK STRING IF IT IS THOSE STRING HAVE SAME NUMBER */ 

  function checkstring(str,checkstr){
 if(str.length !== checkstr.length) return false;
 if(typeof str !== typeof checkstr) return false;
 const str1 ={};
 const str2 ={};
  for(let i=0; i<str.length; i++){
  str1[str[i]] = (str1[str[i]] || 0 )+1;
  str2 [checkstr[i]] = (str2 [checkstr[i]] || 0 )+1;
  }

  for(let key in str1){
    if( str1[key] !== str2[key]){
      console.log( key ,str1[key] , str2[key]);
      return false;
    }
  }
  console.log(str1 , str2);
  return true;
  }
  checkstring('anagram', 'gramana');