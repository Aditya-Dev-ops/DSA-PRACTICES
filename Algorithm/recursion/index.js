/*
function recursion(num){
if(num <=0){
    console.log("All Done!!");
    return;
}
console.log(num);
num--;
recursion(num);
}

recursion(6);
*/
/*
function Stringsearchwhile(str,strsrch){
    let count = 0;
  for(let i=0; i<str.length; i++){
    console.log(i);
    let j=0;
    while (str[i] === strsrch[j]){
      console.log(i);
      console.log(str[i], strsrch[j]);
      j< strsrch.length ? j++:j;
      console.log(j);
    }
}
console.log(count);
}
Stringsearchwhile("aduitya help sizuka","help");
*/

// function stringsearch(long,short){
//   for(let i=0; i<long.length; i++){
//     for(let j=0; j<short.length; j++){
//       if(long[i+j] !== short[j]){
//         console.log("break!"+long[i+j] + short[j]);
//         break;
//       }
//       else{
//         console.log(long[i+j] + short[j]);
//       }
//       if(j=== short.length-1){
//         return `we find search string on ${i} to ${j+i}`;
//       }
//     }
//   }
// }

// console.log(stringsearch("aduitya help sizuka","help"));
/*
function searchnumber(arr, elem){
    var start = 0;
    var end = arr.length-1;
     let middle = Math.floor ((start + end)/2)
     while(arr[middle] !== elem){
        console.log(middle,start,end);
       if(arr[middle] < elem){
        start = middle+1;
       }
       if(arr[middle] > elem){
        end = middle-1;
       }
       middle = Math.floor((start + end)/2);
    }
 }
  searchnumber([1,2,3,4,5,6,7,8,9,10,11,12],7)
  */

  function sortedarray(arr){
for(let i=0; i<arr.length; i++){ 
  for(let j=arr.length-1; j>=0; j++){
    if(arr[i] > arr[j]){
       var temp = arr[j];
       arr[j] = arr[i];
       arr[i] = temp;
    }
  }
}
return arr;
  }
  console.log(sortedarray([5,6,1,2,9,4]))

  function bubblesort(arr){
    for(let i=0; i<arr.length; i++){

      let temp =arr[i];
      for(let j=1; j<arr.length; j++){
        if(arr[i]>arr[j]){
          console.log(temp,arr[j]);  
        }  
      } 
    }
  }
  bubblesort([2,4,1,8,9]);