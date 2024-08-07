// const calcstring = function(string) {
//     const lengthArray = []; 
//     for (let i = 0; i < string.length; i++){ 
//         let character = string.charAt(i); 
//         if (typeof character === 'string' && character !== ' ') { 
//             lengthArray.push(character); 
//         }  
//     } 
//     console.log(lengthArray); 
//     console.log(lengthArray.length); 
// }; 

// const merging = (arr1 ,arr2) =>{
// const newarray = [];
// let i=0;
// let j=0;
// while(i < arr1.length || j < arr2.length){
//     if(arr1[i] > arr2[j]){
//         newarray.push(arr2[j]);
//         j++;
//         console.log(i ,j);
//     }
//     else{
//         newarray.push(arr1[i]);
//         i++;
//     }
//     if(i >= arr1.length -1){
//      while(j <= arr2.length-1) {
//         newarray.push(arr2[j]);
//         j++;
//      }
//     if(j >= arr2.length -1){
//      while(i <= arr1.length-1) {
//         newarray.push(arr1[i]);
//         i++;
//      }
//    }
//  console.log(i,j);
// }}
// console.log(newarray);
// return newarray;
// }


// console.log(merging([-4,1,5,6],[-8,-2,1,7,8,9]));

  
// calcstring('12  kl iy'); 

  // const change = document.getElementById('change');
  // console.log(change);
  // const arraynam = ["adi" , "f" , "b" , "hr"];
  // let num = 0;  
  // change.onclick = (e)=> {
  //   console.log(e.target);
  //   change.innerHTML = arraynam[num];
   
  //   num += 1;
  //   if(arraynam.length <= num) num = 0 ;
  //   console.log(num);
  // }
//    const handleClicked = document.getElementById('clicked');

//   const myPromise = new Promise((res,rej)=>{
//       handleClicked.addEventListener('click',()=>{
//         res('my Clicked');
//       });
//   });




//   const mypromisespending = async()=> {
//        const res = await myPromise.then((f)=> console.log(f));
//        return "Aditya"
//   }

//   const res = await mypromisespending();
//   console.log(res);


// const myPromise = new Promise((res,rej)=>{

// function mergeSort(arr){
// if(arr.length <= 1) return arr;
//   const mid = Math.floor(arr.length/2);
//   console.log("left" + arr.slice(0,mid) ,"right" + arr.slice(mid));
//   const left = mergeSort(arr.slice(0,mid));
//   const right = mergeSort(arr.slice(mid));
//   console.log(left,right);
//   return merge(left ,right);
// }
//   mergeSort([2,4,0,9,8]);


//  function merge(arr1 ,arr2){
//   console.log(arr1 , arr2 , "merge");
//      const sortedArray =[];
//      let i=0;
//      let j=0;
//   while(j<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//       sortedArray.push(arr1[i]);
//       i++;
//     }
//     else {
//       sortedArray.push(arr2[j]);
//       j++;
//     }
//   }
//   while(j<arr2.length){
//     console.log(i,j , "from j");
//     sortedArray.push(arr2[j]);
//     j++;
//   }
//   while (i<arr1.length){
//     console.log(i,j , "from j");
//     sortedArray.push(arr1[i]);
//     i++;
//   }
//   console.log(sortedArray);
//  return sortedArray;
//   }

//  function swapindex(arr, start=0 , end=arr.length){
//   let swap = start;
//   let count = 0;
//   let pivot = arr[start];
//  for(let i= start+1; i<end; i++){
//   count++;
//   if(arr[i] <= pivot){
//       swap++; 
//       let temp = arr[i];
//       arr[i] = arr[swap];
//       arr[swap]= temp;
//    }
//   console.log(arr,start,end ,swap , count);
//   }
//    let temp = arr[swap];
//    arr[swap] = pivot;
//    arr[start]= temp;
//    console.log(arr);
//    console.log(swap);  
//  };

//  swapindex([1,1,8,9,4,3,7],2,7)


//  function Pivot(arr ,start = 0, end= arr.length+1) {
//   console.log(arr,start,end);
//   const pivot = arr[start];
//    let swap = start;
//    for(let i=start+1; i<end; i++){
//      if(pivot > arr[i]){
//        swap++;
//       let temp = arr[swap];
//       arr[swap]= arr[i];
//       arr[i] = temp;
//      }
//     }
//    let temp = arr[swap];
//    arr[swap] = pivot;
//    arr[start]= temp;
//    console.log(arr);
//    return swap
//    } 
  
//  quicksort([5,4,1,9,8,2,1]);

//  function quicksort(arr , left=0, right= arr.length ){
//      if(left < right){  
//       let pivotindex = Pivot(arr,left, right);
//       console.log(pivotindex);
//       //left 
//        quicksort(arr,left=0,right=pivotindex-1);
//       //right
//       // quicksort(arr,left=pivotindex+1,right = arr.length);
//     }
//      return arr;
//  }


//  console.log(Pivot([
//   1, 4, 1, 2,
//   5, 9, 8
// ], 0, 3));
 
//  function Quicksort(arr , left=0 , right=arr.length){
//    if(left >= right){
//     return arr;
//    }
//   pivotindex = pivot(arr , left , right);
//    //left
//    Quicksort(arr, left , pivotindex -1);
//   //right
//    Quicksort(arr , pivotindex + 1 ,right);
//   console.log(arr);
//    return arr;
//  }

//  function pivot(arr , left=0 , right=arr.length){
//   let swap = 0;
//   let pivot = arr[left];
//   for(let i=left; i<right; i++){
//     if(pivot > arr[i]){
//       swap++;
//       let temp = arr[left+swap];
//       arr[swap+left]= arr[i];
//       arr[i] = temp;
//     }
//   }
//   let temp = arr[left+swap];
//   arr[left+swap] = pivot;
//   arr[left] = temp;
//   console.log(arr);
//   console.log(swap);
//   return swap;
//   }


  function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      const pivotIndex = pivot(arr, left, right);
      // Recursively sort elements before and after partition
      quicksort(arr, left, pivotIndex - 1);
      quicksort(arr, pivotIndex + 1, right);
    }
    return arr;
  }
  
  function pivot(arr, left = 0, right = arr.length - 1) {
    const pivotValue = arr[left];
    let swapIndex = left;
  
    for (let i = left + 1; i <= right; i++) {
      if (arr[i] < pivotValue) {
        swapIndex++;
        [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]; // Swap elements
      }
    }
  
    // Swap the pivot element to the correct position
    [arr[left], arr[swapIndex]] = [arr[swapIndex], arr[left]];
    return swapIndex;
  }
  
  // Example usage
  const array = [3, 6, 8, 10, 1, 2, 1];
  console.log(quicksort(array));
  

// function QuickSort(arr){
//   if(arr.length <= 1) {
//     return arr;
//   }
//   console.log(arr);
//   const left = [];
//   const right = [];
//   const pivot = arr[0];
//   for(let i=1; i<arr.length; i++){
//     if(arr[i]<pivot) left.push(arr[i]);
//     if(arr[i] > pivot){   
//       right.push(arr[i]);
//     }
//   }
//    console.log(left , right);
//    return [...QuickSort(left),pivot, ...QuickSort(right)];
//  }

//    const data = QuickSort([1,4,8,9,2,6,7]);
//    console.log(data);
