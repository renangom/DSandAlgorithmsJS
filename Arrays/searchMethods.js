//index e indexOf assim como lastIndex e lasIndexOf
let array = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,16,17];
console.log(array.indexOf(15))
console.log(array.lastIndexOf(16));


//temos os métodos find e findIndex que recebem um callback
//ECMA 2015
function multiple10(element){
    return (element % 10 === 0);
}

console.log(array.find(multiple10));
console.log(array.findIndex(multiple10));

//temos o método includes que retorna true ou false para um valor existente
//ECMA 2016
console.log(array.includes(19));

//tal método também recebe um index para saber de onde deve começar a procurar
console.log(array.includes(16, 5));


//toString e Join
console.log(array.toString())
const arrayString = array.join(' ');
console.log(arrayString)
