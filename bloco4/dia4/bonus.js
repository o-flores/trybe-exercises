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
console.log(numerosRomanosEmAlgarismos('XXIV'));