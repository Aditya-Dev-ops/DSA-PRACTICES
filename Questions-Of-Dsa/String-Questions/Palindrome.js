var isPalindrome = function(s) {
    s = s.toLowerCase();
    for(let i=0; i < Math.floor(s.length/2); i++){
        let char = s.charCodeAt(i);
        let backchar = s.charCodeAt(s.length-i-1);
        if(char > 122 || char < 97 && char > 57 || char < 48){
            s = s.replaceAll(s[i] ,"");
            i--;
            continue;
          }
          if(backchar > 122 || backchar < 97 && backchar >57 || backchar < 48){
             s = s.replaceAll(s[s.length-1-i],"");
             i--;
             continue;
          } 
         if(s[i] !== s[s.length-1-i]){
           return false;
         }
    }
    return true;
   };

   // BETTER WAY
   var isPalindrome = function(s) {

    s = s.toLowerCase();

    var l = 0;
    var h = s.length-1;

    while (l <= h) {
        let cLow = s.charAt(l);
        let cHigh = s.charAt(h);

        if (!isLetterOrDigit(cLow.charCodeAt(0))) {
            l++;
        } else if (!isLetterOrDigit(cHigh.charCodeAt(0))) {
            h--;
        } else if (cLow !== cHigh) {
            return false;
        } else {
            l++;
            h--;
        }
    }

    return true;
};

function isLetterOrDigit(n) {
    return (n >= 65 && n <= 90) || (n >= 97 && n <= 122) || (n >= 48 && n <= 57);
}
console.log(isPalindrome("Marge, let's \"[went].\" I await {news} telegram."));