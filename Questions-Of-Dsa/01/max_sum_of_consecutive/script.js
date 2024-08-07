function Maxcount(a,n){
    if(typeof a !=='object') return;
   if(a.length === 0) return;
   let max = -Infinity;
   for(let j=0; j<a.length-n+1; j++){
    let temp =0;
   for(let i=0; i<n; i++){
      temp+=a[j+i];
   }
 if(temp > max){
    max = temp;
 }
}
console.log(max);
return max;
}
Maxcount([1,9,5,6,7,8],2);