// Exercicio 1

let n = 5;
let concat=[];
for (let linha=1;linha<=n;linha+=1) {
    for (let coluna=1;coluna<=n;coluna+=1){
        asterisco = '*';
        concat +=  asterisco;
    }
    console.log(concat);
    concat=[];
}    

console.log('----------------------------------');

// Exercicio 2 
let m = 4;
let concat1=[];
for (let linha1=1;linha1<=m;linha1+=1) {
    for (let coluna1=1;coluna1<=linha1;coluna1+=1){
        asterisco1 = '*';
        concat1 +=  asterisco1;
    }
    console.log(concat1);
    concat1=[];
}    

console.log('----------------------------------');

//Exercicio 3

const p=10;
let trianguloInvertido=[];
let concat2=[];
let vazios=[];
for(i=1;i<=p;i+=1) {
    for(j=1;j<=p;j+=1) {
        if(j<=p-i) {
            espaco=' ';
            vazios += espaco;
            }
        if (j>p-i) {
            asterisco2 = '*';
            concat2 +=  asterisco2;
            trianguloInvertido = vazios + concat2
        }   
        if(j===p) {
            console.log(trianguloInvertido)
            vazios=[];
            concat2=[];

        }
    }
}

console.log('----------------------------------');

//Exercicio 4

const piramide= 20;
let linhaspiramide;
let metadeMatriz;
let limiteEsquerdo;
let limiteDireito;
let linhaTotal = ' ';
let simbolo = '*';

if(piramide%2===0){
    metadeMatriz = piramide/2;
    limiteDireito = metadeMatriz +1;
    limiteEsquerdo = metadeMatriz -1;
    for(l=1;l<=metadeMatriz;l+=1) {
        for (k=1;k<=piramide;k+=1) {
            if (k>limiteEsquerdo && k<=limiteDireito) {
                linhaTotal = linhaTotal + simbolo;
            } else {
                linhaTotal+=' ';
            }
        }
        console.log(linhaTotal);
        limiteDireito+=1;
        limiteEsquerdo-=1;
        linhaTotal=' ';
    }          
} else {
    metadeMatriz = (piramide+1)/2;
    limiteDireito = metadeMatriz;
    limiteEsquerdo = metadeMatriz;

    for(l=1;l<=metadeMatriz;l+=1) {
        for (k=1;k<=piramide;k+=1) {
            if (k>=limiteEsquerdo && k<=limiteDireito) {
                linhaTotal = linhaTotal + simbolo;
            } else {
                linhaTotal+=' ';
            }
        }
        console.log(linhaTotal);
        limiteDireito+=1;
        limiteEsquerdo-=1;
        linhaTotal=' ';
    } 
}         
//             l   *  ' '  f(*)    f(1)=1     f(*) = 2l-1
//     *       1   1   8    ax+b   f(2)=3
//    ***      2   3   6     a+b=1
//   *****     3   5   4     2a+b=3--> b=-1
//  *******    4   7   2    -a=-2 
// *********   5   9   0     a=2
 
//                2l-k   *   ' '    f(*) = 2l  2l - 
//        **       5   2    8     f(1)=2
//       ****      4   4    6     f(2)=4
//      ******     3   6    4     
//     ********    2   8    2
//    **********   1   10   