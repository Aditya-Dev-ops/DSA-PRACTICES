
class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BetterBinaryTree {
    constructor(){
        this.root = null; 
    }
    check(node,checkedvalue){
        if(node === null) {
            node = new Node(checkedvalue);
            return this;
        }
        if(node.value > checkedvalue){
             if(node.left === null){
                 node.left = new Node(checkedvalue);
                 return this.node;
             }
             else{
                 return this.check(node.left,checkedvalue);
             }
        }
        else{
            if(node.right === null){
                node.right = new Node(checkedvalue);
                return this.node;
            }
            else{
                return this.check(node.right , checkedvalue);
            }
        }
        }
    insert(value){
        if(this.root === null){
            this.root = new 
            Node(value);
            return this.root;
        }
        else{
            return this.check(this.root , value);
        }
    }
    lookup(value){
        if(this.root !== null){
            let currentnode = this.root;
                while(currentnode.value !== value && currentnode.value !== null){ 
                     if(currentnode?.value > value){
                         currentnode = currentnode.left
                     }
                     if(currentnode?.value < value){
                         currentnode = currentnode.right;
                     }    
                    if(currentnode.value !== null) {
                        return ("Your Tree is not haved searched value")
                    }
                }
            return currentnode;
        }
        else{
            return ("Your Tree is empty")
        }
    }
}

const tree = new BetterBinaryTree();


tree.insert(60);
tree.insert(10);
tree.insert(100);
tree.insert(80);
tree.insert(120);
tree.insert(1200);
tree.insert(20);


//Better Way of Doing This..


class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinaryTree {
    constructor() {
        this.root = null; 
    }

    check(node, value) {
        if (node === null) {
            return new Node(value);
        }
        if (value < node.value) {
            node.left = this.check(node.left, value);
        } else if (value > node.value) {
            node.right = this.check(node.right, value);
        }
        return node;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            this.root = this.check(this.root, value);
        }
        return this.root;
    }

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
    }
}

// Example usage
const Bettertree = new BinaryTree();

Bettertree.insert(60);
Bettertree.insert(10);
Bettertree.insert(100);
Bettertree.insert(80);
Bettertree.insert(120);
Bettertree.insert(1200);
Bettertree.insert(20);

console.log(tree.lookup(100)); // Should find and return the node with value 100
console.log(tree.lookup(15));  // Should return "Value not found in the tree"
