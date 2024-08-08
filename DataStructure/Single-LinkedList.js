
class LinkedList {
    constructor(value){
      this.head = {
        value : value ,
        next : null
      }
      this.error = "something went wrong"
      this.tail = this.head;
      this.length = 1;
    }
    // append method add any item first index of list 
    append(value){
      let newnode = {
        value :value ,
        next : null
      }
      if(!this.head){
        this.head = newnode;
        this.tail = this.head;
      }
      else{
        this.tail.next = newnode;
        this.tail = newnode;
      }
      this.length++;
      return this
    }
    // Prepend Method add any item to the end of list
    prepend(value){
      let newnode = {
        value:value ,
        next : null
      } 
      if(!this.head){
        this.head = newnode;
        this.tail = newnode;
      }
      else{
        let tempnode = this.head;
        this.head = newnode;
        this.head.next = tempnode;
      }
      this.length++;
      return this;
    }
    
    // Insert Method  insert any item to the any index of value
    insert (index ,value){
      let newnode = {
        value : value ,
        next : null
      }
      if(index === 0){
      let currentnode = this.head;
        this.head = newnode;
        this.head.next = currentnode;
        return this;
       }
      let prevnode = this.head;
      let currentnode = this.head.next;
       for(let i = 1; i <= index; i++){ 
         if(i === index){
           prevnode.next = newnode;
           newnode.next = currentnode;
           this.length++;
           return this;
         }
         else{
           prevnode = currentnode;
           currentnode = currentnode.next;
         }
         if(currentnode === undefined) return this.error;
      }
    }
    printlist() {
      const array = [];
      let currentnode = this.head;
      while(currentnode !== null){
         array.push(currentnode.value);
         currentnode = currentnode.next;
      }
      return array;
    }
    remove(index){
      if(index > this.length){
        console.log("Run1")
        return this.error
      }
       if(index === 0){
         let currentnode = this.head;
         this.head = currentnode.next;
         this.length--;
         console.log("Run2")
         return this.printlist();
       } 
      
      let currentnode = this.head;
      let prevnode = this.head;
      let i=0;
      while(i < this.length && i <= index){
        if(index === this.length-1 && i === index){
          this.tail = prevnode;
          this.tail.next = null;
          this.length--;
          return this.printlist();
        }
        if(i === index ){
          prevnode.next = currentnode.next;
          this.length--;
          console.log("Run3")
          return this.printlist();
        }
        else{
          prevnode = currentnode;
          currentnode = currentnode.next;
        }
        i++;
       }
      return this.error;
    }
    reverse(){
      if(!this.head.next){
        return this.head;
      }
      this.tail = this.head;
      let first = this.head;
      let second = first.next;
      while(second){
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
      this.head.next = null;
      this.head = first; 
      return this.printlist();
    }
  }
  
  const list = new LinkedList(10);
  console.log(list);
  console.log(list.append(5));
  console.log(list.append(16));
  console.log(list.prepend(9));
  console.log(list.printlist());
  console.log(list.printlist());
  console.log(list.remove(2));
  console.log(list);
  // console.log(list.remove());