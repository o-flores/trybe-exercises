let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1

for (let i=0; i < numbers.length; i+=1) {
    console.log(numbers[i]);
}

//Exercicio 2
let soma=0
for (let i1=0; i1 < numbers.length; i1+=1) {
    soma+=numbers[i1];
}
console.log('a soma é de: ' + soma);

//Exercicio 3 e 4

let media=0
let soma1=0
for (let i2=0; i2 < numbers.length; i2+=1) {
    soma1+=numbers[i2];
}
media=(soma1/numbers.length);
console.log('a media é de: ' + media);
if (media >20) {
    console.log('o valor é maior que 20');
} else console.log('o valor é menor que 20');

//Exercicio 5

let menorNumero= numbers[0];
for (let indice = 1; indice < numbers.length; indice+=1) {
    if (numbers[indice] < menorNumero){
        menorNumero=numbers[indice];
    }

}
console.log('o menor numero é: ' + menorNumero);

//Exercicio 6
let contador = 0;
for (let i =0; i <numbers.length; i+=1) {
    if ((numbers[i]%2)!==0) {
        contador +=1
    }     
}
if (contador ===0) {
    console.log('nenhum valor ímpar encontrado')
}else console.log('a quantidade de numeros impar é: ' + contador);

//Exercicio 7

let maiorNumero =0;
for (let indice2 = 0; indice2 < numbers.length; indice2+=1) {
    if (numbers[indice2] > maiorNumero){
        maiorNumero=numbers[indice2];
    }

}
console.log('o maior numero é: ' + maiorNumero);

//Exercicio 8

let ex=[];
for (index=0; index < 25; index+=1) {
    ex[index]=(index+1);
}
console.log(ex);

//Exercicio 9

let ex1=[];
for (index2=0;index2<25;index2+=1) {
    ex1[index2]=(ex[index2]/2);
}
console.log(ex1);
