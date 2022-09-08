// é uma coleção ordenada de items que segue o princípio de last in first out (LIFO)
//stacks são utilizadas também por compiladores em linguagens de programação
//também usada pela memória do computador para armazenar variáveis e chamar metodos e também pelo histórico do browser


class Stack{
    constructor() {
        this.items = [];
    }

    //fazendo o método push
    push(element){
        this.items.push(element);
    }

    //fazendo o método pop
    pop(){
        return this.items.pop();
    }

    //fazendo o peek method, que irá retornar um último elemento adicionado
    peek(){
        return this.items[this.items.length - 1];
    }

    //verificando se a stack está vazia
    isEmpty(){
        return this.items.length === 0;
    }

    //verificando o tamanho da stack
    size(){
        return this.items.length;
    }

    //método clear, deixando a stack vazia
    clear(){
        this.items = [];
    }

}


//implementando a stack
const stack = new Stack();
console.log(stack.isEmpty())
