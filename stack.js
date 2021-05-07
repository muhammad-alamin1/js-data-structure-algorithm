class Stack{
    constructor(){
        this.stack = [];
    }
    add(item){
        this.stack.push(item);
    }
    remove(item){
        if(this.stack.length){
            return this.stack.pop(item);
        }
    }
}


const guest = new Stack();
guest.add('Rahman');
guest.add('Jamran');
guest.add('Elon Musk');
guest.add('Imran');

console.log(guest.stack);
const speaker = guest.remove();
console.log(speaker);
console.log(guest.stack);