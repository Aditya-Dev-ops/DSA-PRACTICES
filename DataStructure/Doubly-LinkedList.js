class DoublyLinkedlist{
    constructor(value){
     this.head = {
        value: value,
        prev: null,
        next: null
     }
     this.tail = this.head;
     this.length = 1;
    }
    append(value){
        let newnode = {
            value: value,
            prev:this.tail,
            next: null
        }
        this.tail.next = newnode;
        this.tail = newnode;
        this.length++;
    }
    prepend(value){
        let newnode = {
            value: value,
            prev: null,
            next: this.head
        }
        this.head.prev = newnode;
        this.head = newnode;
        this.length++;
    }
    printlist(){
        let array = [];
        let currentnode = this.head;
        while(currentnode){
          array.push(currentnode.value);
          currentnode = currentnode.next;
        }
        return array;
    }
    remove(index){
      if(index < 0 || index >= this.length) return ("you can't remove non existing item");
      let currentnode = this.head.next;
      let prevnode = this.head;
      if(i === 0){
         this.head = currentnode;
         this.head.prev = null;
         this.length--;
         return this.printlist(); 
      }
      if(i === this.length - 1){
        prevnode = this.tail.prev;
        this.tail = prevnode;
        this.tail.next = null;
        return this.printlist();
      }                              
      for(let i = 1; i < this.length-1; i++){
        if(i === index){
           prevnode.next = currentnode.next;
           currentnode.next.prev = prevnode;
           this.length--;
           return this.printlist();
        }                 
        else{
        prevnode = currentnode ;
        currentnode =  currentnode.next;
        }
     }
    }
    insert(index , value){
       if(index < 0 || index >= this.length) return ("you can't  add item on this index");
       let newnode = {
        value : value ,
        next: null,
        prev: null
       };
       let prevnode = this.head;
       let currentnode = this.head;
       if(index === 0){
          newnode.next = currentnode;
          this.head = newnode;
          this.length++;
          return this.printlist();
       }
       if(index  === this.length-1 ){
          newnode.prev = this.tail;
          this.tail = newnode;
          return this.printlist();
       }
       currentnode = currentnode.next;
       for(let i = 1; i< this.length-1; i++){
        if(i === index){
           newnode.prev = prevnode;
           prevnode.next = newnode;
           newnode.next = currentnode;
           currentnode.prev = newnode;
           return this.printlist();
        }
        else{
            prevnode = currentnode;
            currentnode = currentnode.next;
        }
       }
       return ("Something went wrong")
    }
 }

 