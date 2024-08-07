// function sort(arr){
//      for(let i=0; i<arr.length; i++){
//       console.log(i);
//     for(let j=i+1; j<arr.length; j++){
//       if(arr[i] > arr[j]){
//        let temp = arr[i];
//        arr[i] = arr[j];
//        arr[j] = temp;
//     console.log(arr);
//    //  console.log(j);
//         //[arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//       }
//     }
//     }
//    // console.log(arr);
//   }
//   sort([1,20,3,8,2,4,5,6]);


  function selectionsort(arr){
   for(let i=0; i<arr.length-1; i++){
    let temp =i;
    for(let j=i+1; j<arr.length; j++){
       if(arr[temp] >arr[j]){
        temp=j;
       }
      }
      if(i !== temp){
      swap=arr[i];
      arr[i]=arr[temp];
      arr[temp]=swap; 
      }
   console.log(arr[i],temp);
  }
  console.log(arr);
}
  
  selectionsort([2,5,6,4,1,3])

  /*INSERTION SORT*/

  function insertionsort(arr) {
for(let i=1; i<arr.length ; i++){
  let currentval= arr[i];
   for(var j=i-1; j>=0 && arr[j] > currentval; j--){
   arr[j+1]=arr[j];
   console.log(arr,arr[j],arr[j+1]);
   }
   arr[j+1]=currentval;
}
  }
  insertionsort([4,3,1,6,7,9,2]); 

  // *MERGE--SORT* //
  function Mergesort(arr,arr2){
  let result=[];
  let i=0;
  let j=0;
 while(i<arr.length && j<arr2.length){
  if(arr[i] <arr2[j]){
    result.push(arr[i])
    i++
   }
   else{
    result.push(arr2[j]);
    j++
   }
 }
   while(i<arr.length){
   result.push(arr[i]);
   i++;
   console.log("run" + arr);
   }
   while(j<arr2.length){
   result.push(arr2[j]);
   j++;
   console.log("run" + arr2);

   }
   console.log(result);
  }
  Mergesort([4,5,7,9,10],[1,2,3,6,8]);