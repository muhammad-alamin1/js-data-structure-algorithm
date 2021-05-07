class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(item){
        if(this.queue.length){
            return this.queue.shift(item);
        }
    }
}

const premik = new Queue();
premik.enqueue('Asik');
premik.enqueue('Imran');
premik.enqueue('Anika');
console.log(premik.queue);
const winner = premik.dequeue();
console.log(winner);
console.log(premik.queue);