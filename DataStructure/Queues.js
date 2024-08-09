
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
  }
  
  class Queues{
  constructor(){
    this.first = null;
    this.last = null;
    this.length =0;
  }
  peek(){
    if(this.length > 0) return this.first;
    else return ("stack is empty");
  }
  enqueue(value){
     if(this.length === 0){
         this.first = new Node(value);
         this.last = this.first;
     } 
     else{
        let newnode = new Node(value);
        this.last.next = newnode;
        this.last = newnode;
    }  
    this.length++;
     return this;
  }
  dequeue(){
     if(!this.first) return ("stack is empty");
     if(this.first === this.last) this.last = null;
      let removednode = this.first;
      this.first = this.first.next;
      this.length--;
      return removednode; 
    }
  };
  
  const queue = new Queues();
  
  console.log(queue.enqueue("First"));
  console.log(queue.enqueue("Second"));
  console.log(queue.enqueue("Third"));
  console.log(queue.peek());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  
  
  
  
