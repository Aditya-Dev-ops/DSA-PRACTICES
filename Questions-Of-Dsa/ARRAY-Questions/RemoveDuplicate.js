
// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place 
// such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

var removeDuplicates = function(nums) {
    const Array = [];
    Array.length = nums.length;
    let index = 0;
    for(let i=0; i<nums.length; i++){
        temp = nums[i];
        let check = false;
        for(let j=0; j<Array.length; j++){
            if(Array[j] === temp){
                check = true;
                break;
            }
        }
        if(!check){
            Array[index] = temp;
            index++;
        }
        
    }
    console.log(Array)
    return Array;
};
