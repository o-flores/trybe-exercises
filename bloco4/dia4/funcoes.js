function sum(a,b) {
    return console.log(a+b);
};


function subtraction (a,b) {
    return console.log(a-b);
};

function multiply (a,b) {
    return console.log(a*b);
}; 

function division (a,b) {
    return console.log(a/b);
};

function mod (a,b) {
    return console.log(a%b);
};

function isLarger(a,b) {
    let maior;
    if (a == b) {
        return console.log('numeros iguais');
    } else if (a > b) {
        maior = a;
    } else {
        maior = b;
    }
    return console.log('O maior número é: '+ maior)
};


function isLarger3(a,b,c) {
    let maior;
    if (a>b && a>c) {
        maior = a;
    }else if (b>a && b>c) {
        maior = b;
    }else {
        maior = c;
    }
    return console.log('o maior número é ' + maior );    
}

function isPositive (a) {
    let isPositive;
    if (a < 0) {
        isPositive='negative';
    }else if (a > 0) {
        isPositive = 'positive';
    }else {
        isPositive = 'zero';
    }
    return console.log(isPositive);
}

function isTriangle (ang1, ang2, ang3) {

    if ((ang1+ang2+ang3) == 180) {
        return console.log('É um triangulo');
    }else {
        return console.log('Não é um triangulo');
    }
}

function chessMoves (peca) {
    let pecaLowerCase = peca.toLowerCase();
    let moves;
    switch (pecaLowerCase) {
        case 'peao':
            moves='A peça se movimenta com movimentos para frente e come na diagonal';
            break;
        case 'bispo':
            moves='A peça se movimenta com movimentos na diagonal';
            break;
        case 'torre':
            moves='A peça se movimenta com movimentos para frente e para lateral';
            break;
        case 'cavalo':
            moves='A peça se movimenta com movimentos em L: 3x2 ou 2x3';
            break;
        case 'rainha':
            moves='A peça se movimenta em qualquer direção menos em L';
            break;
        case 'rei':
            moves ='A peça se movimenta um espaço em qualquer direção';
            break;
        default:
            console.log('nao existe no tabuleiro de xadrez');
            break;
    } 
    return console.log(moves);
}

function grades (notaEmNumero) {
    let notaEmLetra;
    if (notaEmNumero>100 || notaEmNumero<0) {
        return console.log('nota errada');
    }else if(notaEmNumero >=90) {
        notaEmLetra = 'A';
    }else if(notaEmNumero >=80) {
        notaEmLetra = 'B';
    }else if(notaEmNumero >=70) {
        notaEmLetra = 'C';
    }else if(notaEmNumero >=60) {
        notaEmLetra = 'D';
    }else if(notaEmNumero >=50) {
        notaEmLetra = 'E';
    }else {
        notaEmLetra = 'F';
    }
    return console.log('A nota do aluno é: ' + notaEmLetra);
}

function isEven  (a,b,c) {
    if ( (a%2 == 0) && (b%2 == 0) && (c%2 == 0)) {
       return console.log(true);

    }else return console.log(false);
}

function isOdd (a,b,c) {
    if ( (a%2 !== 0) && (b%2 !== 0) && (c%2 !== 0)) {
        console.log(true);
    }else {
        console.log(false);
    }
}

function totalProfit (custoUnitario, vendaUnitaria, quantidade) {
    let lucroUnitario = vendaUnitaria - (custoUnitario*=1.2);
    if(custoUnitario < 0 || vendaUnitaria <0) {
        return console.log('valores menores que 0')
    }else {
        return console.log('Lucro total de: R$' + lucroUnitario*quantidade);
    }
}
function netSalary(salarioBruto) {
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
    return console.log('O salario liquido é igual a R$' + salarioLiquido);
}    