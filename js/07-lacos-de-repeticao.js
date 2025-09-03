/* Laços(Loops) de repetição permitem executar um bloco de código várias vezes, de forma controlada.

  Isso EVITA repetição manual de código e é essencial para automatizar terefas.

  Os laços mais comuns são: for, while, do while

*/


// conhecendo o FOR - para
// É o laço de repetição mais comum. Geralmente ele é usado quando sabemos eexatamente quantas vezes queremos repetir algo.

/* 
for(inicialização; condição; incremento){
// bloco de código que vai ser executado
} 

    ++ operador de incremento
    -- operador de decremento
*/

for (let i = 0 ; i < 5 ; i++) {
   console.log("Olá");
}

for (let i = 0 ; i <= 5 ; i++) {
   console.log("Contagem:", i);
}

// Laço infinito
// j <= 5 - essa condição sempre vai ser verdadeira, pois j que é igual a zero, NUNCA vai ser maior que o valor de comparação que é 5, pois a cada rodada ele diminui em um o valor de j por conta do operador de decremento --

// for (let j = 0; j <= 5; j--) {
//   console.log("Contagem regressiva:", j);
// }


for (let j = 5; j >= 0; j--) {
    console.log("Contagem regressiva:", j);

    if (j === 0) {
        console.log("Feliz ano novo!");
    } else {
        console.log ("Falta pouco...");
    }
}

// while - enquanto
// Geralmente é usado quando NÃO sabemos quantas vezes algo será repetido

/* 

whie (condição) {
    // bloco de código que var ser executado enquanto a condição for verdadeira
}

só para de ser executado quando a condição for falsa
*/

// loops infinito
/* let contador = 0;

while (condition) {
  console.log("Deu ruim", contador);
} 
*/