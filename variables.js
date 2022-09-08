// Variáveis tem seu próprio escopo de atuação
// quando let e const foram introduzidas, introduziram um escopo de bloco, ou seja, não podem ser
// acessadas fora do seu bloco
// temos, global scope, function scope e agora o block scope

{
    let x = 35
}
{
    const y = 35
}

// x e y não pode ser acessada fora do bloco

{
    var olá = "Oi renan"
}

// declarações com var não possuem o escopo de bloco, podendo serem acessadas fora do escopo

var n1 = 10

{
    var n1 = 5
}
// aqui n1 é igual a 5

//Com let, temos um bloco definido, temos

let n2 = 100

{
    let n2 = 250
}

//aqui n2 vale 100