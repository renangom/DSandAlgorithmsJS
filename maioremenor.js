
//SELECTION SORT ACHA O MENOR VALOR VÁRIAS VEZES

let notas = [56, 100, 96, 85];


function achaMenor(array){
    let notaMenor = 1000;

    for(let i = 0; i < array.length; i++){
        if(notas[i] < notaMenor){
            notaMenor = notas[i];
        }
    }

    console.log(notaMenor)
}

achaMenor(notas)

let listaNotasOrdenadas = [37, 42, 53 ]