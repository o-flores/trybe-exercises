let Romanos = {
    I : 1,
    V: 5,
    X: 10,
    L:50,
    C:100,
    D:500,
    M:1000
}

function numerosRomanosEmAlgarismos (numeroRomano) {
    let soma = Romanos[numeroRomano[0]];
    for (i=1;i<numeroRomano.length;i+=1) {
        if (Romanos[numeroRomano[i]] < Romanos[numeroRomano[i-1]]) {
            if (Romanos[numeroRomano[i]] < Romanos[numeroRomano[i+1]]){
                soma =  soma + Romanos[numeroRomano[i+1]]- Romanos[numeroRomano[i]];
                i+=2;
                continue;
            }
        }
        if (Romanos[numeroRomano[i-1]]< Romanos[numeroRomano[i]]) {
            soma = Romanos[numeroRomano[i]]-soma;            
        } else {
            soma+= Romanos[numeroRomano[i]]; 
        }
    
    }
    return soma;
}


function add(a,b) {
    let aString = a.toString();
    let bString = b.toString();
    let bigString;
    let smallString;
    let addResult=[];
    let soma=[];

    if (aString.length>bString.length) {
        bigString = aString;
        smallString = bString;
    } else {
        bigString = bString;
        smallString = aString;
    }

    let k=smallString.length-1;
    for (index = bigString.length-1; index>=0;index-=1) {
        if (k>=0) {
            soma [index] = parseInt(bigString[index]) + parseInt(smallString[k]);
            k-=1;
        } else {
            soma [index] = parseInt(bigString[index]);
        }
    }

    addResult = parseInt(soma.join(''));
    return addResult;
}

console.log(add(2,11));