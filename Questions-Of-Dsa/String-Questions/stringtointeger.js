
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.

var myAtoi = function(s) {
    s = s.trim();
    let intvalue = 0;
    let i = 0;
    if(s[i] === "+" || s[i] === '-' ||  s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58){
        if(!(s.charCodeAt(i+1) > 47 && s.charCodeAt(i+1) < 58)){
             if(s[i] === '-' || s[i] === "+"){
                 return 0;
             }
             else{
                 return s[i];
             }
        }
       else{
           intvalue = (Number.parseInt(s));
             if(intvalue > 2147483647){
                 return 2147483647;
             }
             else if(intvalue < -2147483648){
                 return -2147483648
             }
            else{
                return intvalue;
            }
           }
    }
    else{
        return 0;
    }
};