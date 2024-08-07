
function countuniquevalues(a){  
    const arr1 =[];
    let count = a[0];
 for(let i=0; i<a.length; i++){
    console.log(count , a[i]);
    if(count !== a[i]){ 
    arr1.push(count);
    count = a[i];
    }  
  } 
    console.log(arr1.length); 
    console.log(arr1); 
    }  
    const af =[1,1,2,2,3,3,4,5,5,6,7];
 
  countuniquevalues(af);

