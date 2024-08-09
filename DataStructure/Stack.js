
class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack{
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek(){
      return this.top;
    }
    push(value){
      if(this.length >= 1){
      const newnode = new Node(value);
      let temp = this.top;
        newnode.next = temp; 
        this.top = newnode;
        console.log("run");
        this.length++;
        return this;
      }
      else{
        const newnode = new Node(value);
        this.top = newnode;
        this.bottom = this.top;
        this.length++;
        return this;
      }
    }
    pop(){
      if(this.length === 0){
        this.bottom = null;
        return ("stack is empty")
      }
      if(this.length > 0){
        let  temp = this.top;
        this.top = this.top.next;
        this.length--;
        return temp;
      }
    }
  }
  
  const stack = new Stack();
  console.log(stack.push("google"));
  console.log(stack.push("chrome"));
  console.log(stack.push("twitter"));
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack)