// Given two integer arrays nums1 and nums2, 
// return an array of their intersection. 
// Each element in the result must appear 
// as many times as it shows in both arrays and 
// you may return the result in any order.

var intersect = function(nums1, nums2) {
    let obj = {};
    let returned = [];
    for(let num of (nums1.length > nums2.length?nums2:nums1)){
      obj[num] = (obj[num] || 0) + 1;
    }
    for(let num of (nums1.length > nums2.length?nums1:nums2)){
      if(obj[num]){
        obj[num] -= 1;
        returned.push(num);
      }
    };
    return returned;
  };
  