
// function SumZero(arr){
//  let left=0;
//  let right= arr.length-1;
//  let sumback = undefined;
//  sum = arr[left] + arr[right];
//  while(left < right){
// if (sum === 0){
//   sumback =[arr[left] , arr[right]];
//   console.log(sumback);
//   right --;
//   left ++;
// }
// else if(sum >0){
//     right --;
// }
// else {
//   left++;
//  }  
// }
// }    
// console.log(SumZero([-3,-2,-1,0,1,2,3]))

// function countuniquevalues(arr){
//     const count=[];
//     var j = 0;
//    for(let i=1; i<arr.length; i++){
//      if(arr[j] !== arr[i]){
//         console.log(arr[i],'i');
//         j=i;
//         count.push(arr[j]);
//         console.log(j); 
//         console.log(i);
//       }  
//    }  
//    console.log(count);
//  }
//  countuniquevalues([-2,-1,-1,2,3,4,4,4,4,6,7,8,8,8,9]);


//  function Slidingwindow(arr,j){
//   let Maxsum =0;
//   let last=j;
//   let wholesum =0;
//   for (let f=0; f<j; f++){
//       wholesum +=(arr[f])
//     } 
//    for(let i=j; i<arr.length; i++){
//      wholesum = wholesum-arr[i-last]+arr[i];
//     Maxsum =Math.max(wholesum,Maxsum);
//      console.log(Maxsum,wholesum,arr[i-last],arr[i]);
//    } 
//    console.log(Maxsum);
//  }
// Slidingwindow([1,2,4,5,6,7,2,4,5,8,9,10],3);

function bubblesort(arr){
  let count =0;
    let length=arr.length-1;
  for(let i=0; i<length; i++){
    let noswaps= true;
    let temp ;
   for(let j=0; j<length-i; j++){
     if(arr[j] > arr[j+1]){
      temp=arr[j];
      arr[j]=arr[j+1];
      arr[j+1]=temp;
      noswaps=false;
    }
    count++
    console.log( arr,count,arr[j],arr[j+1],temp);
    }
    if(noswaps) break;
  console.log(count);
  };
  // console.log(arr);
  }
bubblesort([10,1,5,7,8,11,12])

