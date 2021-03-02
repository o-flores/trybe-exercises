function isPalindrome (word) {
    let count=0;
    for (i=0; i<word.length; i+=1){
        if (word[i]===word[(word.length-i-1)]){
            count+=1
        }
    }
    if (count === word.length) {
        return true;
    } else return false;
}

function highestValue (array) {
    let higher=array[0];
    for (i=1;i<array.length;i+=1) {
        if (array[i] > higher ) { 
            higher = array[i];
        }
    }
    return higher;
}

function lowestValue (array) {
    let lowest = array[0];
    for (i=1;i<array.length;i+=1) {
        if (array[i] < lowest) { 
            lowest = array[i];
        }
    }
    return lowest;
}

function biggestWord (words) {
    let bigger = words[0];
    for (i=1;i<words.length;i+=1) {
        if (words[i].length > bigger.length) {
            bigger = words[i];
        }
    }
    return bigger;
}

function mostRepeatedNumber (numbers) {
    let repeated =[];
    for(i=0;i<numbers.length;i+=1) {
        let repeatedvalue=1;
        for (j=0; j<numbers.length; j+=1) {
            if (j===i) {
                continue;
            } else if(numbers[i]===numbers[j]) {
                repeatedvalue+=1
            } 
        }
        repeated.push(repeatedvalue);
    }
    let mostRepeatedNumber = highestValue(repeated)
    let indexOfHighestValue = repeated.indexOf(mostRepeatedNumber);
    return numbers[indexOfHighestValue];
}

function sumFactorial (n) {
    let sum=0;
    for(i=1;i<=n;i+=1) {
        sum += i;
    }
    return sum;
}

function VerifiesEndWord (word,endWord) {
    if (word.substring(((word.length) - (endWord.length)),word.length)===endWord) {
        return true;
    } else {
        return false;
    }
}
 console.log(VerifiesEndWord('orlando', 'lando'));
