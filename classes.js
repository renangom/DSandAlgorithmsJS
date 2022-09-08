//INTRODUZIDO POR ES2015

//SEM ES2015

// function Book(title, pages, isbn) {
//     this.title = title;
//     this.pages = pages;
//     this.isbn = isbn;
// }

// Book.prototype.printTitle = function() {
//     console.log(this.title)
// }

// let book = new Book('title', 'pag', 'isbn');
// book.printTitle()


//COM ES2015
class Book{
    constructor(title, pages, isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    printIsbn() {
        console.log(this.isbn)
    }
}

//HERANÇA
class ITBook extends Book{ // herdando propriedades da classe
    constructor(title, pages, isbn, technology){
        super(title, pages, isbn); // se referindo ao construtor da classe herdada
        this.technology = technology;
    }

    printTechnology() {
        console.log(this.technology)
    }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567', 'JavaScript')
console.log(jsBook.title);
console.log(jsBook.printTechnology())


//MÉTODOS ESTÁTICOS SÃO CHAMADOS SEM A INSTANCIAÇÃO DE SUA CLASSE E NÃO PODEM SER CHAMADOS QUANDO A 
// CLASSE É INSTANCIADA

class Ponto{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

     static distancia (a,b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy)
    }
}

const p1 = new Ponto(5,5);
const p2 = new Ponto(10,10);

console.log(Ponto.distancia(p1,p2))