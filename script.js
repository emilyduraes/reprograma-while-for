// Algoritmo que imprime de n a 1

for(let n = 10; n > 0; n--){
    console.log(n);
}

Algoritmo que imprime apenas números ímpares de 1 a 100

let i = 0;

do{
    if ( i % 2 !== 0){
        console.log(i);
    }
    i++
} while(i < 100);

// Algoritmo que imprime a soma dos números múltiplos de 3 e 5, menores que 1000.

function somarNumeros(){

    let i = 0;

    while(i < 1000){
        if(i % 3 === 0){
            let multiplo3 = i;
            return multiplo3;
        } else if(i % 5 === 0){
            let multiplo5 = i;
            return multiplo5;
        }
        i++;
}
    return multiplo3 + multiplo5
}

console.log(somarNumeros());

// Algoritmo que, dados dois números, calcula o MDC deles.

let mdc = 1;
let divisor = 2;
let x = 90;
let y = 54;

while(x > 1 && y > 1){
    if(x % divisor === 0 && y % divisor === 0){
        mdc *= divisor;
        x /= divisor;
        y /= divisor;
    } else if (x % divisor === 0){
        x /= divisor;
    } else if (y % divisor === 0){
        y /= divisor;
    } else{
        divisor++;
    }
}
console.log(mdc);

//Algoritmo que, dado um número, printa a tabuada do mesmo de 1 a 10

numero = 5;
i = 1;

while(i <= 10){
    console.log(i + "x" + numero + " = " + (i*numero));
    i++;
}