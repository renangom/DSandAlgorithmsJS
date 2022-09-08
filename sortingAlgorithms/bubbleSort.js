//o bublle sort realize múltiplas passagens por uma lista, é um algoritmo de ordenação simples
// Compara os elementos adjacentes e troca aqueles que estão fora de ordem

function bubbleSort(array){
    for (let i = 0; i < array.length ; i++){
        for(let j = 0; j < array.length - i - 1; j++){
            if(array[j]>array[j+1]){
                let aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux
            }
        }
    }

    return array
}

let numbers = [9, 7, 4, 7, 12, 15, 1, 75, 53, 64, 213, 643, 12, 1, 24]
let newArray = bubbleSort(numbers);

console.log(newArray);