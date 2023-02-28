//ao invés de utilizarmos um array, vamos utilizar um objeto

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

const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);