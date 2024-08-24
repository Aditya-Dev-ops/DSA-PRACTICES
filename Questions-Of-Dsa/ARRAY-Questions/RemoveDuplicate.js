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
