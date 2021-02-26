//Bonus 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i=1; i<numbers.length; i+=1) {
    for (let j=0; j<i; j+=1) {
        if (numbers[i]<numbers[j]) {
            let numero = numbers[j];

            numbers[j] = numbers[i];
            numbers[i]=numero;
        }
    }
}
console.log(numbers);

//Bonus 2

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i=1; i<numbers1.length; i+=1) {
    for (let j=0; j<i; j+=1) {
        if (numbers1[i]>numbers1[j]) {
            let numero1 = numbers1[j];

            numbers1[j] = numbers1[i];
            numbers1[i]=numero1;
        }
    }
}
console.log(numbers1);
                                
//Bonus 3                
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];                                  
let array=[];
    for (i=0;i<numbers2.length;i+=1) {
        if (i===numbers2.length-1) {
            let multi = numbers2[i]*2;
            array.push(multi);
        }else {
        let multiplicacao = numbers2[i]*numbers2[i+1];
        array.push(multiplicacao);
        }
    }
console.log(array);