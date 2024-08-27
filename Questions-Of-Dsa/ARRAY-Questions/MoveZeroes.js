// var moveZeroes = function(nums) {
//     let zeroindex = nums.indexOf(0);
// if(zeroindex === -1){
//     return nums;
// }
//      for(let i = zeroindex; i < nums.length; i++){
//          if(nums[i] !== 0){
//              nums[zeroindex] = nums[i];
//              nums[i] = 0;
//              if(nums[zeroindex+1] === 0) {
//                  zeroindex += 1
//              }
//            else{  
//              zeroindex = i;
//            } 
//          }
//  };    
// return nums;
// };

// Best Approach
var moveZeroes = function(nums) {
       let left = 0;
       let right = 0;
       while(right < nums.length && right < nums.length){
         if(nums[right] !== 0){
             [nums[right] , nums[left]] = [nums[left] , nums[right]];
             left++;
         }
         right++;
       }
 return nums;
};
console.log(moveZeroes([0,1,0,3,12]));
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]