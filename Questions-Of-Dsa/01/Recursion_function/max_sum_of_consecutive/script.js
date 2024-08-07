function collectodds(nums){
   let result =[]; 
   function coll_odds(a){
   if(nums[a] % 2 !== 0){
      result.push(nums[a]);
   }
   console.log(a,nums.length); 
   if(a === nums.length) return;
     coll_odds(++a);    
   }
   coll_odds(0);
   console.log(result);
}
 collectodds([1,2,5,3,6,7,8,9]); 