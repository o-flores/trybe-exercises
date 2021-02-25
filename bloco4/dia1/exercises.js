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