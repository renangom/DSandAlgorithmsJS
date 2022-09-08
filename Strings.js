//Slice method

let str = "Apple, Banana, Kiwi"
let part = str.slice(7,13)
console.log(part)

let part2 = str.slice(7)
console.log(part2)

//substring é similar ao slice

let part3 = str.substring(7,13)
console.log(part3)


// replace method
let text = "Por favor visite minha casa, minha casa é linda e muito cheirosa, esta é minha casa"
let newText = text.replace("casa", "mansão")

//para substituir todas as palavras, devo utilizar /g
let newText2 = text.replace(/casa/g, 'mansão')
console.log(text)
console.log(newText)
console.log(newText2)


// concat method
let text1 = "Olá"
let text2 = "mundo"
let text3 = text1.concat(" ", text2)
console.log(text3)

//trim method removes white spaces of both sides of the strings
let text4 = "eu     olá mundo     "
let texto5 = text4.trim()
console.log(texto5)

//split converts the string into an array
console.log(text.split(","))
