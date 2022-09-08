// ARRAY É MUTÁVEL 
let number = [1, 2, 3, 4, 5, 6];

number.push(11);

console.log(number)

// INSERTING IN THE FIRST POSITION
Array.prototype.insertInFirstPosition = function(value){
    for(let i = this.length; i>=0; i--){
        this[i] = this[i-1];
    }

    this[0] = value
}

number.insertInFirstPosition(-1)
console.log(number)
// método unshift faz a mesma coisa
number.unshift(-3)
console.log(number)

// para remover, utilizamos o método pop
console.log(number, number.pop(), number);

//remover o primeiro item
Array.prototype.reIndex = function(myArray){
    const newArray = [];
    for(let i = 0; i< myArray.length; i++){
        if(myArray[i] !== undefined){
            newArray.push(myArray[i]);
        }
    }

    return newArray;
}

Array.prototype.removeFirstPosition = function() {
    for(let i = 0; i< this.length; i++){
        this[i] = this[i+1];
    };

    return this.reIndex(this);
}
console.log(number);
number = number.removeFirstPosition();
console.log(number);

//as funções criadas aplciam o metodo shift
console.log("Antes do shift", number);
number.shift();
console.log("Após o shift:", number)


//O método splice remove elementos de um array, recebe dois parâmetros
//o index da onde será tirado e quantos elementos serão
number.splice(1, 2)
console.log(number);
//adicionando
number.splice(0,0,2,3);
console.log(number)