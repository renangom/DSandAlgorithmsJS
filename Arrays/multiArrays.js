//vamos supor que fazemos várias medidas de temperatura ao longo do dia, durante dias, temos
let averageTempD1 = [72, 73, 74, 75, 76];
let averageTempD2 = [73, 75, 76, 78, 72];

//vamos usar um array de dimensão dois, é a melhor resposta
let averageTemp = [];
averageTemp[0] = [72, 73, 74, 75, 76];
averageTemp[1] = [73, 75, 76, 78, 72];
console.log(averageTemp)

// O javascript não suporta arrays de mais de uma dimensão, contudo, podemos criar arrays de arrays
// day 1
let averageTemp2 = [];
averageTemp2[0] = [];
averageTemp2[0][0] = 72;
averageTemp2[0][1] = 75;
averageTemp2[0][2] = 79;
averageTemp2[0][3] = 79;
averageTemp2[0][4] = 81;
averageTemp2[0][5] = 81;
// day 2
averageTemp2[1] = [];
averageTemp2[1][0] = 81;
averageTemp2[1][1] = 79;
averageTemp2[1][2] = 75;
averageTemp2[1][3] = 75;
averageTemp2[1][4] = 73;
averageTemp2[1][5] = 73;

//vamos iterar uma matriz
function printMatrix(matrix) {
    for(let i = 0; i< matrix.length; i++){
        for(let j=0; j< matrix[i].length; j++){
            console.log(matrix[i][j])
        }
    }
}


//juntar arrays
const positiveNumbers = [1,2,3];
const zero = 0;
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(positiveNumbers);
console.log(numbers)
let natural = negativeNumbers.concat(zero, positiveNumbers);
console.log(natural)


//método every, ele itera nosso array até retornar false
function isEvent(x){
    console.log(x);
    return x % 2 === 0 ? true : false;
}
let numero = [1,2,3,4,5,6,7,8];
numero.every(isEvent)


//o método some itera até retornar true
console.log("===============================")
numero.some(isEvent)

//forEach itera todo o array
console.log("===============================")
numero.forEach((x) => {console.log(x % 2 === 0)})

//filtra arrays
const evenNumbers = numero.filter((num) => {
    return num % 2 === 0
})
console.log(evenNumbers)

//o método reduce, recebe quatro valores, valoranterior, valoratua, index, array
//index e array são opcionais
const soma = numero.reduce((previous, current) => previous + current);
console.log(soma);

//for of

for(const n of numero){
    let soma = 0;
    soma += n;
    return soma
}


