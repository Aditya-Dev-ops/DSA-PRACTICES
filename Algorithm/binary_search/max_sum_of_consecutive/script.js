function collectodds(arr,nums){
   let start =0;
   let end =arr.length-1;
   let mid = Math.floor((start + end)/2);
   console.log(mid);
  
   while(arr[mid] !== nums ){
      if(nums > arr[end] || arr.length < 0 || nums <= 0) return -1;
      if(nums > arr[mid]){
         start=mid + 1;
      }
      else{
           end = mid-1;
      }
      mid = Math.floor((start + end) / 2);
   }
   console.log(arr[mid] , nums);
}
 console.log(collectodds([1,2,5,6,7,8,9],0)); 