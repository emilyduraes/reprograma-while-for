// // Algoritmo que imprime de n a 1

// for(let n = 10; n > 0; n--){
//     console.log(n);
// }

// Algoritmo que imprime apenas números ímpares de 1 a 100

// let i = 0;

// do{
//     if ( i % 2 !== 0){
//         console.log(i);
//     }
//     i++
// } while(i < 100);

// // Algoritmo que imprime a soma dos números múltiplos de 3 e 5, menores que 1000.

// function somarNumeros(){

//     let i = 0;

//     while(i < 1000){
//         if(i % 3 === 0){
//             let multiplo3 = i;
//             return multiplo3;
//         } else if(i % 5 === 0){
//             let multiplo5 = i;
//             return multiplo5;
//         }
//         i++;
// }
//     return multiplo3 + multiplo5
// }

// console.log(somarNumeros());

// // Algoritmo que, dados dois números, calcula o MDC deles.

// let mdc = 1;
// let divisor = 2;
// let x = 90;
// let y = 54;

// while(x > 1 && y > 1){
//     if(x % divisor === 0 && y % divisor === 0){
//         mdc *= divisor;
//         x /= divisor;
//         y /= divisor;
//     } else if (x % divisor === 0){
//         x /= divisor;
//     } else if (y % divisor === 0){
//         y /= divisor;
//     } else{
//         divisor++;
//     }
// }
// console.log(mdc);

// //Algoritmo que, dado um número, printa a tabuada do mesmo de 1 a 10

// numero = 5;
// i = 1;

// while(i <= 10){
//     console.log(i + "x" + numero + " = " + (i*numero));
//     i++;
// }

// Algoritmo que lê 5 números e informa qual o maior

// let listaDeNumeros = [9,13,35,543534534,2];

// console.log('O maior número é: ' + Math.max(...listaDeNumeros));

// Mostrar todos os números de uma array

// let numeros = [8,5,43,97,15]

// for(let i = 0; i < numeros.length; i++){
//     console.log(numeros[i]);
// }

/* O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:

Lojas Quase Dois - Tabela de preços

1 - R$ 1.99

2 - R$ 3.98

...

50 - R$ 99.50 */

// for(let i = 1; i <= 50; i++){
//     console.log(i + ' = R$' + i*1.99);
// }

// Algoritmo que pede um número inteiro e determina se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.

// function testarPrimo(numero){
//   if (numero === 1){
//         return ('O número ' + numero + ' não é primo.');
//   } else if(numero === 2){
//         return ('O número ' + numero + ' é primo.'); 
//   } else{
//         for(let x = 2; x < numero; x++){
//             if(numero % x === 0){
//                 return ('O número ' + numero + ' não é primo.');
//             }
//         }
//         return ('O número ' + numero + ' é primo.'); 
//   }
// }

// console.log(testarPrimo(37));

// A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.

// n = 50;
// fibonacci = [0,1];
// let i = 1;

// while(i < n){
//     let x = (fibonacci[i]+fibonacci[i-1]);
//     fibonacci.push(x);
//     i++;
// }

// console.log(fibonacci);

/* O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas. */

let temperaturas = [21,34,15];
let maiorTemperatura = Math.max(...temperaturas);
let menorTemperatura = Math.min(...temperaturas);
let media = temperaturas.reduce((a,b) => a + b, 0) / temperaturas.length;

console.log('Maior temperatura: '+ maiorTemperatura + '; menor temperatura: ' + menorTemperatura + '; e a média: ');