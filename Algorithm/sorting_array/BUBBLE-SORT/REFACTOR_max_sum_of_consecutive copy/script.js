
function sort(arr){
     for(let i=0; i<arr.length; i++){
    for(let j=0; j<i; j++){
      if(arr[j] > arr[j+1]){
       let temp = arr[j];
       arr[j] = arr[j+1];
       arr[j+1] = temp;
    console.log(arr);
     console.log(j);
        //[arr[j],arr[j+1]] = [arr[j+1],arr[j]];
      }
    }
    }
    console.log(arr);
  }
sort([1,20,3,8,]);


function bubblesort(arr){
  let count =0; // to count how many time our loop run 
    let length=arr.length-1; // to start a loop in -1 place from last
  for(let i=0; i<length; i++){
    let noswaps= true;  // break loop when no swaps is not happen after inner loop is finished thats means our array is sorted earlier 
    let temp ;// for swapping
   for(let j=0; j<length-i; j++){ // length-i thts thing make sure that our j+1 is not going on our sorted items because if one time whole innerloop is completed thats confirm our last index element is sorted so we did not want to check last index again 
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


function selectionsort(arr){
  for(let i=0; i<arr.length-1; i++){
   let temp = arr[i];
   let swap;
   for(let j=i; j<arr.length; j--){
     if(temp < arr[j]){
       temp=arr[j];
     } 
  }
  swap=arr[i];
  arr[i]=temp;
  temp=swap;
  console.log(arr[i],temp);
 }
 console.log(arr);
}
 
 selectionsort([2,5,6,4,1,3])
