const tag = document.getElementsByTagName('p');

function same(arr1,arr2){
     console.log(typeof arr1);
     const double=[];
if(typeof arr1 && typeof arr2  !== 'object') return console.error('input is wrong you only give two array in that function');
if(arr1.length  !== arr2.length) return (console.log('your array item is not have same quantity so how you compare it\'s values  to another arrays values'));
let freequencycounter1 = {}
let freequencycounter2 = {}

for(let val of arr1){
     freequencycounter1[val] = (freequencycounter1[val] || 0) +1
}
 for(let val of arr2){
     freequencycounter2[val] = (freequencycounter2[val] || 0) +1
 }
console.log(freequencycounter1 ,freequencycounter2);
for(let key in freequencycounter1){
     if( key**2 in freequencycounter2 && freequencycounter1[key] === freequencycounter2[key**2]){
          console.log(freequencycounter1[key] , freequencycounter2[key **2]);
     }
     else false;
}
};
const arr1 = [2,1,2];
const arr2 = [4,4,1];
console.log(typeof arr1);
 const check= same(arr1,arr2);
console.log(check);

/* ANOTHER APROACH *
for(let i=0; i<a.length; i++){
     let currentindex = b.indexOf(a[i]**2); 
      if(currentindex === -1) return false;
      b.splice(currentindex,1);
    return true;
}
//  a.forEach(el => {
//      for(let i=0; i<a.length; i++){
//           if((el * 2) === b[i]){             
//                console.log(`yes it's true ${el} is double the ${b[i]} at index ${[i]}`);
//                console.log(b);
//                console.log(b[i]);
//                double.push(b[i]);
//                b.(b[i]);
//                console.log(b);
//                break;
//                console.log('break');
//           }
    // }; */



// strings comparison 

// function validAnagram(a,b){
//   if(typeof a && typeof b  !== 'string') return console.error('input is wrong you only give two array in that function');
//   if(a.length  !== b.length) return (console.log('your string don\'t have enough words to compare'));
//      const newstr = {}
// for(let i=0; i<a.length; i++){
//      let letter = a[i];
// newstr[letter] ? newstr[letter] +=1 : newstr[letter] =1;
// } 

// for(let j=0; j<a.length; j++){
//      let letter = b[j];
//      if(!newstr[letter]){
//           return false;
//      }
//       else{ newstr[letter] -=1 ;
//  } 
// }
// console.log(a);
// console.log(b);
// console.log(newstr);
// };
// const a = 'aditya';
// const b = 'dityaa';
// validAnagram(a,b);
