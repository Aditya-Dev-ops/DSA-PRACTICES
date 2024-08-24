
// class newnode{
//     constructor(value){
//         this.left = null;
//         this.right = null;
//         this.value = value;
//     }
// }

// class BetterBinaryTree {
//     constructor(){
//         this.root = null; 
//     }
//     check(newnode,checkedvalue){
//         if(newnode === null) {
//             newnode = new newnode(checkedvalue);
//             return this;
//         }
//         if(newnode.value > checkedvalue){
//              if(newnode.left === null){
//                  newnode.left = new newnode(checkedvalue);
//                  return this.newnode;
//              }
//              else{
//                  return this.check(newnode.left,checkedvalue);
//              }
//         }
//         else{
//             if(newnode.right === null){
//                 newnode.right = new newnode(checkedvalue);
//                 return this.newnode;
//             }
//             else{
//                 return this.check(newnode.right , checkedvalue);
//             }
//         }
//         }
//     insert(value){
//         if(this.root === null){
//             this.root = new 
//             newnode(value);
//             return this.root;
//         }
//         else{
//             return this.check(this.root , value);
//         }
//     }
//     lookup(value){
//         if(this.root !== null){
//             let currentnode = this.root;
//                 while(currentnode.value !== value && currentnode.value !== null){ 
//                      if(currentnode?.value > value){
//                          currentnode = currentnode.left
//                      }
//                      if(currentnode?.value < value){
//                          currentnode = currentnode.right;
//                      }    
//                     if(currentnode.value !== null) {
//                         return ("Your Tree is not haved searched value")
//                     }
//                 }
//             return currentnode;
//         }
//         else{
//             return ("Your Tree is empty")
//         }
//     }
// }

// const tree = new BetterBinaryTree();


// tree.insert(60);
// tree.insert(10);
// tree.insert(100);
// tree.insert(80);
// tree.insert(120);
// tree.insert(1200);
// tree.insert(20);


//Better Way of Doing This..


class node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinaryTree {
    constructor() {
        this.root = null; 
    };

    check(newnode, value) {
        if (newnode === null) {
            return new node(value);
        }
        if (value < newnode.value) {
            newnode.left = this.check(newnode.left, value);
        } else if (value > newnode.value) {
            newnode.right = this.check(newnode.right, value);
        }
        return newnode;
    };

    insert(value) {
        if (this.root === null) {
            this.root = new node(value);
        } else {
            this.root = this.check(this.root, value);
        }
        return this.root;
    };

    lookup(value) {
        let currentNode = this.root;
        while (currentNode !== null) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return currentNode;
            }
        }
        return "Value not found in the tree";
    };
    breadthfirstSearch(){
      let currentNode = this.root;
      let list = [];
      let queue = [];
       queue.push(currentNode);
       while(queue.length >0){
         currentNode = queue.shift();
         list.push(currentNode.value);
         if(currentNode.left){
            queue.push(currentNode.left);
         }
         if(currentNode.right){
            queue.push(currentNode.right);
         }
       }
       return list;
    };
    BreadthFirstSearchRecursion(queue , list){
     if(queue.length <= 0){
        return list;
     };
     let currentNode ;
     while(queue.length > 0){
      currentNode = queue.shift();
      list.push(currentNode.value);
      if(currentNode.left){
        queue.push(currentNode.left);
      }
      if(currentNode.right){
        queue.push(currentNode.right);
      }
     }
     return list;
    };
    DFS_InOrder(){
        return traverseInOrder(this.root ,[]);
    };
    DFS_ToOrder(){
        return traverseToOrder(this.root ,[]);
    };
    DFS_PostOrder(){
        return traversePostOrder(this.root ,[]);
    };
};


//**Function that used in Bettertree Class 
function traverseInOrder(node , list){
    if(node.left){
        traverseInOrder(node.left,list);
    }
    list.push(node.value);
    if(node.right){
        traverseInOrder(node.right,list);
    }
    return list;
};

function traverseToOrder(node , list){
    list.push(node.value);
    if(node.left){
        traverseToOrder(node.left,list);
    }
    if(node.right){
        traverseToOrder(node.right,list);
    }
    return list;
}
function traversePostOrder(node , list){
    if(node.left){
        traversePostOrder(node.left,list);
    }
    if(node.right){
        traversePostOrder(node.right,list);
    }
    list.push(node.value);
    return list;
}


// Example usage
const Bettertree = new BinaryTree();

Bettertree.insert(9);
Bettertree.insert(6);
Bettertree.insert(12);
Bettertree.insert(1);
Bettertree.insert(4);
Bettertree.insert(34);
Bettertree.insert(35);
console.log(Bettertree);
console.log(Bettertree.DFS_InOrder());
console.log(Bettertree.DFS_ToOrder());
console.log(Bettertree.DFS_PostOrder());