
class Hashtable{
    constructor(size){
      this.data = new Array(size);
    }
    _hash(key){
      let hash = 0;
      for(let i = 0; i < key.length; i++){
       hash = (hash + key.charCodeAt(i) * 1) % this.data.length;
      }
      return hash;
    }
      set(key ,value){
        const hash = this._hash(key);
         if(!this.data[hash]){
          this.data[hash] = [];
         }
         if(this.data[hash].length){
          for(let i=0;i<this.data[hash.length]; i++){
            if(this.data[hash][i][0] === key){
              this.data[hash][i][1] = value;
              return this.data[hash];
             }
           }  
          }
         this.data[hash].push([key,value]);
        return this.data[hash];
      };
     get(key){
         const hash = this._hash(key);
         const currentbucket = this.data[hash];
         if(currentbucket){
         for(let i=0; i<currentbucket.length; i++){
          if(currentbucket[i][0] === key ){
            return currentbucket[i][1];
            }
          } 
        }
       return undefined ;
     } 
    
    keys(){
      const keysarray = [];
      for(let i=0; i < this.data.length; i++ ){
        if(this.data[i]){
          
          if(this.data[i].length > 1){
              console.log(this.data[i])
             for(let j=0; j< this.data[i].length; j++){
               console.log("if Run")
               keysarray.push(this.data[i][j][0])
             }
           }
            
          else{   
          keysarray.push(this.data[i][0][0]);
            console.log("else run")
          }
        }
      }
      console.log(keysarray)
      return keysarray;
    }
  }
    const myhashtable = new Hashtable(5);
  
    myhashtable.set("aname", "Aditya");
    myhashtable.set("bname", "Ravi");
    myhashtable.set("csdm", "Gaurav");
    myhashtable.set("gskod", "Gaurav");
    myhashtable.set("hekdo", "ravim");
    console.log(myhashtable.get("hekdo"));
  
  
    // Testing the get method
    // console.log(myhashtable.get("aname")); // Output: Aditya
    // console.log(myhashtable.get("bname")); // Output: Ravi
    // console.log(myhashtable.get("gskod"));  // Output: Gaurav
     console.log(myhashtable.data[0]); // Output: undefined
  
    myhashtable.keys();
  