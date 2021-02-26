let a = 7;
let b = 13;

let soma = a+b;
let subtracao = a-b;
let mult = a*b;
let div = a/b;
let mod = a%b;

let num1 = 17;
let num2 = 20;
if (num1 > num2) {
    console.log('num1 é maior');
} else if (num1 == num2) {
    console.log('numeros iguais');
} else {
    console.log('num2 é maior');
}

let c = 3;
let d = 24;
let e = 2;
let maior;
if (c>d && c>e) {
    maior = c;
}else if (d>c && d>e) {
    maior = d;
}else {
    maior = e;
}
console.log('o maior número é ' + maior );

let isPositive = -0;
if (isPositive < 0) {
    console.log('negative');
}else if (isPositive > 0) {
    console.log('positive');
}else {
    console.log('zero');
}

let ang1 = 45.7;
let ang2 = 27.90;
let ang3 = 92;
if ((ang1+ang2+ang3) == 180) {
    console.log(true);
}else {
    console.log(false);
}
let peca1 = 'PEAO';
let peca = peca1.toLowerCase();
switch (peca) {
    case 'peao':
        console.log(peca + ' se movimenta com movimentos para frente e come na diagonal');
        break;
    case 'bispo':
        console.log(peca + ' se movimenta com movimentos na diagonal');
        break;
    case 'torre':
        console.log( peca + ' se movimenta com movimentos para frente e para lateral');
        break;
    case 'cavalo':
        console.log(peca + ' se movimenta com movimentos em L: 3x2 ou 2x3');
        break;
    case 'rainha':
        console.log( peca + ' se movimenta em qualquer direção menos em L');
        break;
    case 'rei':
        console.log(peca + ' se movimenta um espaço em qualquer direção');
        break;
    default:
        console.log(peca + 'nao existe no tabuleiro de xadrez')
        break;
} 

let notaEmNumero = 40;
let notaEmLetra;
if (notaEmNumero>100 || notaEmNumero<0) {
    console.log('nota errada');
}else if(notaEmNumero >=90) {
    notaEmLetra = 'A';
    console.log('A nota do aluno é: ' + notaEmLetra);
}else if(notaEmNumero >=80) {
    notaEmLetra = 'B';
    console.log('A nota do aluno é: ' + notaEmLetra);
}else if(notaEmNumero >=70) {
    notaEmLetra = 'C';
    console.log('A nota do aluno é: ' + notaEmLetra);
}else if(notaEmNumero >=60) {
    notaEmLetra = 'D';
    console.log('A nota do aluno é: ' + notaEmLetra);
}else if(notaEmNumero >=50) {
    notaEmLetra = 'E';
    console.log('A nota do aluno é: ' + notaEmLetra);
}else {
    notaEmLetra = 'F';
    console.log('A nota do aluno é: ' + notaEmLetra);
}

let n1=1;
let n2=5;
let n3=92;
if ( (n1%2 == 0) || (n2%2 == 0) || (n3%2 == 0)) {
    console.log(true);
}else {
    console.log(false);
}

let n4=4;
let n5=53;
let n6=92;
if ( (n4%2 !== 0) || (n5%2 !== 0) || (n6%2 !== 0)) {
    console.log('impar');
}else {
    console.log('par');
}

let custo = 450.80;
let venda = 1000.00;
let lucro = venda - (custo*=1.2);
if(custo < 0 || venda <0) {
    console.log('valores menores que 0')
}else {
    console.log('lucro total de: ' + lucro*1000);
}

let salarioBruto = 6000;
let salarioDescontado;
let salarioLiquido;
let aliquotaINSS;
let aliquotaIR;
let parcelaIR
if (salarioBruto> 5189.82 ) {
    salarioDescontado = salarioBruto-570.88;
}else if(salarioBruto> 2594.93 ) {
         aliquotaINSS = 0.11;
         salarioDescontado = salarioBruto*=(1-aliquotaINSS)
}else if (salarioBruto> 1556.95 ) {
         aliquotaINSS = 0.09;
         salarioDescontado = salarioBruto*=(1-aliquotaINSS)
}else {
    aliquotaINSS = 0.08;
    salarioDescontado = salarioBruto*=(1-aliquotaINSS)
}
if (salarioDescontado > 4664.68) {
    aliquotaIR = 0.275;
    parcelaIR = 869.36;
}else if (salarioDescontado > 3751.06) {
          aliquotaIR = 0.225;
          parcelaIR = 636.13;
}else if (salarioDescontado > 2826.66) {
          aliquotaIR = 0.15;
          parcelaIR = 354.8;

}else if (salarioDescontado > 1903.99) {
          aliquotaIR = 0.075;
          parcelaIR = 142.8;
}else{
    aliquotaIR = 0;
    parcelaIR = 0;
}
salarioLiquido = salarioDescontado - ((salarioDescontado*aliquotaIR) - parcelaIR);
console.log('o salario liquido é igual a = ' + salarioLiquido);
