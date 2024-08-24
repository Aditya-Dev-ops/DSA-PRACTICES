//Given a non-empty array of integers nums, 
// every element appears twice except for one. Find that single one.


var singleNumber = function(nums) {
    if(nums.length < 2) return nums[0];
    const obj = {};
    for(let i=0; i < nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]] += 1;
        }
        else{
            obj[nums[i]] =1;
        }
    }
    for(let x in obj){
        if(obj[x] === 1){
            return x;
        }
    }
};

// Better Way of doing that 
var singleNumber = function(nums) {
    if(nums.length < 2) return nums[0];
     let number =0;
    for(let x of nums){
        number ^= x;
    }
    return number;
};