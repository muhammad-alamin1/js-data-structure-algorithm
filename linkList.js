class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor(head){
        this.head = head;
    }
    
    add(node){
        const newNode = new Node(node);
        // this.head.next = newNode;
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const mBondon = new LinkedList(head);
mBondon.add(47);
mBondon.add(45);
mBondon.add(53);
console.log(JSON.stringify(mBondon));