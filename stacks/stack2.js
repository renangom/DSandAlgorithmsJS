//ao invés de utilizarmos um array, vamos utilizar um objet

function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while(number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!remStack.isEmpty()){
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

class Stack{
    constructor(){
        this.count = 0;
        this.items = {};
    }

    //métodos
    //pushing elements
    push(element){
        this.items[this.count] = element;
        this.count++;
    }

    //size of the array
    size(){
        return this.count;
    }

    //isEmpty
    isEmpty(){
        return this.count === 0;
    }

    pop(){
        if(this.isEmpty()){
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek(){
        if(this.isEmpty());{
            return undefined;
        }

        return this.items[this.count - 1];
    }

    clear(){
        this.items = {};
        this.count = 0;
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }

        let objString = `${this.items[0]}`
        for(let i = 1; i< this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }

        return objString
    }
    
}

console.log(decimalToBinary(233))
console.log(decimalToBinary(10))
console.log(decimalToBinary(423))