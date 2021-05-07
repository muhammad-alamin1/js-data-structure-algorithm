class Dictionary{
    constructor() {
        this.dictionary = {};
        
    }
    add(key, value) {
        this.dictionary[key] = value;
    }
    get(key) {
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add('Mahi','01234785744');
phoneBook.add('Pori Moni','012347554744');
phoneBook.add('Purnima','01744545744');
phoneBook.add('Mousomi','0123475744');
console.log(phoneBook);
const Mahi = phoneBook.get('Mahi');
console.log(Mahi);