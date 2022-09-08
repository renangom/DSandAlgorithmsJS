//indexOf retorna  o index da primeira ocorrência do texto especificado
let text = "Por favor localize onde localize ocorre"
console.log(text.indexOf("localize"))

// lastIndexOf faz a mesma coisa, contudo, agora ela retorna a última ocorrência
console.log(text.lastIndexOf("localize"))

//search procura por uma string e retorna sua posição
console.log(text.search("localize"))


//match procura uma string que combine com a expressão e retorna o valor combinado como um Array
let str = "The rain in SPAIN stays mainly in the plain"
console.log(str.match(/ain/g).length)

//includes retorna true se a string contém um valor específico

if(str.includes('rain')) {
    console.log("tem sim mermão")
}

