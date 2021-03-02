//Exercicio 5

let n=9;
let symbol = '*';
let line = ' ';
let metadeMatriz = (n+1)/2;
let limiteDireito;
let limiteEsquerdo;
if (n%2===0) {
    console.log('Digite um numero ímpar')
}else {
    limiteDireito=metadeMatriz;
    limiteEsquerdo=metadeMatriz;
    for (i=1;i<=metadeMatriz;i+=1) {
        for (j=1;j<=n;j+=1) {
            if (j===limiteDireito || j===limiteEsquerdo ||i===metadeMatriz) {
                line += symbol;
            }else {
                line += ' ';
            }
        }
        console.log(line);
        limiteEsquerdo-=1;
        limiteDireito+=1;
        line = ' ';
    }
}

//Exercicio 6

let number = 533;
let dividers= [];
for (i=2;i<number;i+=1) {
    if (number%i ===0) {
        dividers.push(i);
    }
    
}
if (dividers !== null) { 
    console.log('os divisores de ' + number +' são:' + dividers)
} else {
    console.log('O número: ' + number + ' é primo!')
}