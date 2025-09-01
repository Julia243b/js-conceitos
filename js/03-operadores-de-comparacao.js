// Operadores de comparação
// São usados para comparar valores
// Eles SEMPRE retornar TRUE(verdadeiro) ou FALSE(falso)
// tipo de dado booLean/ booLeano
// Lógica de boole

/* 
    operadores mais comuns:
    > - maior que
    < - menor que
    >= maior ou igual
    <= menor ou igual
    
    == igualdade 
    ( nome do " = " é chamado de 'atribuição')
*/
let numero = 5;
let numero2 = "5";  //é uma string "" ou ''
let numero3 = 7;

// > - maior que
console.log(numero > numero3); //false ou true

// < - menor que
console.log(numero < numero);

// >= maior ou igual
console.log(5 >= 7);

// <= menor ou igual
console.log(9 <= 9);

// == igualdade
console.log(10 == 10);

// == igualdade - Compara os valores, e não o TIPO DE DADO do elemento 
console.log(10 == "10"); // "10" é uma string


// outros operadores de comparação
// === Igualdade escrita - Analisa o TIPO DE DADO e o VALOR do elemento
// != Diferente
// !== Diferente estrito


// Falso, pois os tipos de dados são diferentes embora os valores sejam os mesmos
console.log(11 === '11');

// Verdadeiro, pois os tipos de dados e os valores são iguais
console.log(11 === 11);


// != Diferente - Funciona de forma similar ao operador de Igualdades. Analisa
console.log(5 != '5');

// !== Diferente estrito - Funciona de forma similar ao Igualdade estrita. Ele também analisa o tipo de dado e o valor
console.log(5 !== '5');




// Exemplo explicação === (use === para igual) e string:
//               10        "10"
// console.log(numbrer == string) string é um text


//               10        "10"
// console.log(number === string) é coisas diferente "10" é um dado string 


//               10         10
// console.log(number === number)  mesmo tipos de dados