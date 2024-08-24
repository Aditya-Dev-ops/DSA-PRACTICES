// Given an integer array nums, 
// rotate the array to the right by k steps, 
// where k is non-negative.

var rotate = function(nums, k) {
    while(k > nums.length) {
        k -= nums.length;
    }
    if(k === 0 || undefined || null) return nums;
    const Array = []; 
    for(let i=0; i < k; i++){
       Array[k-(i+1)] = nums.pop();
     }
    nums.unshift(...Array);
    return nums;
  };
  
  // Best Way of Doing That With splice and unshifting method;
