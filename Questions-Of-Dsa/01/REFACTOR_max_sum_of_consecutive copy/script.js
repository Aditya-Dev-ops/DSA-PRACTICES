function Maxcount(arr,ntimes){
    if(typeof arr !=='object') return;
   if(arr.length === 0) return;
   let max = 0;
   let temp =0;
   for(let j=0; j< ntimes; j++){
    max +=arr[j];
     }
 for(let i=ntimes; i<arr.length; i++ ){
  temp = arr[i-ntimes] +arr[i];
 }
 max = Math.max(max,temp);
console.log(max);
console.log(max,temp);
}

Maxcount([1,9,5,6,7,8],2);