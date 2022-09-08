//entries, keys and values
let numeros = [1,2,3,4,5,6,7,8,9,10,11];
let aEntries = numeros.entries();
console.log(aEntries.next().value);
// for(const entry of aEntries){
//     console.log(entry)
// }

const aKeys = numeros.keys();
console.log(aKeys.next());

//método from
//cria um array de outro existente
let numero2 = Array.from(numeros);
let evens = Array.from(numeros, x => {x % 2 === 0})
console.log(evens)

//método of
//cria um novo array dos argumentos passados no método
let numero3 = Array.of(1,2,3,4,5,6,7);


//método fill
let numbersCopy = Array.of(1,2,3,4,5,6);
numbersCopy.fill(0);
console.log(numbersCopy)
numbersCopy.fill(2,1); //preencha com número 2 a partir do index 1
console.log(numbersCopy)

//metodo sort
numeros.sort((a,b) => a - b)
function compare(a,b) {
    if(a < b){
        return -1;
    }
    if(a > b){
        return 1;
    }

    return 0;
}

let changed = numeros.reverse();
console.log(changed)
changed.sort(compare)
console.log(changed)

//custom sorting
const friends = [
    {name:'John', age:30},
    {name:'Ana', age:20},
    {name:'Chris', age: 25}
];

function comparePerson(a,b){
    if(a.age < b.age){
        return -1;
    }
    if(a.age > b.age){
        return 1;
    }
    return 0;
}

console.log(friends.sort(comparePerson))

//sorting strings
// no javascript  A:65, J:74, a:97 e j:106
let names = ['Ana', 'ana', 'john', 'John']
console.log(names.sort())
console.log(names.sort((a,b) => {
    if(a.toLowerCase()<b.toLowerCase()){
        return -1;
    }
    if(a.toLowerCase() > b.toLowerCase()){
        return 1;
    }

    return 0;
}))

console.log(names.sort((a,b) => a.localeCompare(b)))


