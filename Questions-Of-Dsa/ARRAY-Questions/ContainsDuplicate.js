// Given an integer array nums, return true if any value appears at least twice in the array
//  and return false if every element is distinct.

var containsDuplicate = function(nums) {
    let obj ={}; 
   for(let i=1; i<nums.length+1; i++){
     if(obj[nums[i-1]]){
         return true;
       }
     else{
       obj[nums[i-1]] = 1;
      }
   };
   return false;
};