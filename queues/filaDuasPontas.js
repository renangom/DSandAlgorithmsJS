//Combina as estruturas de pilha e fila, nos permite inserir e remover elementos do final ou da frente

class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    addFront(element) {
        // checando se está vazia, se estiver, adiciona atrás
        if(this.isEmpty()){
            this.addBack(element)
        } else if(this.lowestCount > 0) {
            //se houver algum elemento na frente, atualizamos o lowest e o novo elemento é
            // adicionado ao lowest
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        }else {
            //movendo cada elemento uma posição para frente
            for (let i = this.count; i > 0; i--){
                this.items[i] = this.items[i - 1];
            }
            //a posição 0 ficou vazia, assim, adicionamos o novo elemento
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }

    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
}