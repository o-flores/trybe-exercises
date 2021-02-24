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