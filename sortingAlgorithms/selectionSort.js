
function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let menor = i;

        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[menor]){
                menor = j;
            }
        }

        let aux = array[i];
        array[i] = array[menor];
        array[menor] = aux
    }

    return array
}

let numbers = [9, 7, 4, 7, 12, 15, 1, 75, 53, 64, 213, 643, 12, 1, 24]
let newArray = selectionSort(numbers);
console.log(newArray)