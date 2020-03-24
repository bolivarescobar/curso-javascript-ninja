/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myVar = [3, "Jojoca", true, null, undefined]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

var arr = [1, 2, 3];

function myFunction(a) {
    return a;
}

myFunction(arr);

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

var newArr = [1, "OK", true];

var number = 2;

function newFunction(a, b) {
    if(b === undefined) {
        return a;
    };

    return a[b];
}

console.log(newFunction(newArr, 2));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var otherArr = [2, true, "Oi", 7, {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(newFunction(otherArr));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(bookName) {
    var library = {
        "dicionario": {quantidadePaginas: 100, autor: "Bolivar", editora: "Pão de lot"},
        "jojoca": {quantidadePaginas: 200, autor: "Jojoquinha", editora: "Pão de lot"},
        "rasputin": {quantidadePaginas: 150, autor: "Igor", editora: "Globoceta"}
    };

    if( !bookName ) {
        return library;
    }

    return library[bookName];

// return !bookName ? library : library[bookName];

//Aqui no caso "bookName" precisa ser uma string do nome do livro;

}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log( "O livro Rasputin tem " + book("rasputin").quantidadePaginas + " páginas.")

var bookName = "Rasputin";

console.log( "O livro " + bookName + " tem " + book(bookName).quantidadePaginas + " páginas.");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log( "O autor do livro Rasputin é " + book("rasputin").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log( "O livro Rasputin foi publicado pela editora " + book("rasputin").editora + ".");
