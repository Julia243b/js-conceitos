// Conhecendo a estrutura condicional switch(troca)
// Bem similar ao if/else. É utilizada para testar multiplos valores de uma mesma variavel ou expressão

/* 
 sintaxe básica do switch
 break - serve para parar a executação

 switch(expressão/condição){
  case valor1: 
    // código se a expressão === valor1
    break;
  case valor2:
    // código se a expressão == valor2
    break;

  default:
    // código que vai ser exevutado caso nenhuma das condições acima seja atendida
 }
*/

// exemplo de switch com dias da semana

let dia = 4;

switch(dia) {
    case 1:
        console.log("domingo");
        break;

    case 2:
        console.log^("segunda-feira");
        break;

    case 3:
        console.log("terça-feira");
        break;

    case 4:
        console.log("quarta-feira");
        break;

    case 5:
        console.log("quinta-feira");
        break;

    case 6:
        console.log("sexta-feira");
        break;

    default:
        console.log("Dia inválido");
}


// exemplo de switch com operações matemáticas
let operacao = "+";
let a = 10;
let b = 5;

switch(operacao){
    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;
    
    case "*":
        console.log(a * b);
        break;
    
    case "/":
        console.log(a / b);
        break;
    
    default:
        console.log("Operação inválida");
}
