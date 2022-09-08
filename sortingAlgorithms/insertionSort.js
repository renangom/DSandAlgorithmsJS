
function insertionSort(array){
    for(let i = 0; i < array.length; i++){// loop para fazer este processo de comparação com todos os elementos
        let key = array[i];

        let j = i - 1
        while(j > -1 && array[j] > key){ //loop para comparar meu elemento atual com todos os anteriores
            array[j+1] = array[j]; // trocando as posições
            j = j - 1;
        }

        array[j+1] = key
    }
    return array
}

let numbers = [9, 7, 4, 7, 12, 15, 1, 75, 53, 64, 213, 643, 12, 1, 24]
let newArray = insertionSort(numbers)
console.log(newArray)
