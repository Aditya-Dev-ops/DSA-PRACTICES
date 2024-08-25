// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to 
// least significant in left-to-right order. 
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.
// It is best Approach
var plusOne = function(nums) {    
    if(nums.length > 16){
         return (String(BigInt(nums.join(""))+BigInt(1)).split("").map(Number));
         }
     else{
         return (String(parseInt(nums.join(""))+1).split("").map(Number));
     }
 };

 // Simultaneous Approach for doing that 
 var plusOne = function(nums) {    
    let add = "";
     const returned = [];
     for(let x=0; x < nums.length; x++){
             add +=`${nums[x]}`;
        }
     if(add.length > 16){   
         add =  BigInt(add);
         let temp = BigInt(1);
         add += temp;
     }
     else{
         add = parseInt(add);
         add += 1;
     }
     add = add.toString();
     for(let i=0; i<add.length; i++){
          returned.push(parseInt(add[i]));
     }
     return returned;
 };