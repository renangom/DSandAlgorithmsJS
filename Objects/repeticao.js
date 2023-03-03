const client = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11123141412", "12313123423"],
};

client.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934"
    },
]

for(let campo in client) {
    let tipo = typeof client[campo];
    if(tipo !== 'object' && tipo !== "function"){
        console.log(`${campo} : ${client[campo]}`);
    }
    
}