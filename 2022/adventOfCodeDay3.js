// advent of code day #3 part #1

const commonItem = (line) => {
    let firstString = line.slice(0, line.length / 2);
    let secondString  = line.slice(line.length / 2, line.length);

    for(let i = 0; i < firstString.length; i++) {
        for(let j = 0; j < secondString.length; j++) {
            if(firstString[i] === secondString[j]) {
                return firstString[i];
            }
        }
    }
};

const alphabetPosition = (letter) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.indexOf(letter) + 1;
};

const main = (input) => {
    let result = 0;
    let linesArray = input.split("\n");

    for(let i = 0; i < linesArray.length; i++) {
        let sameLetter = commonItem(linesArray[i]);
        result += alphabetPosition(sameLetter);
    }
    return result;
};


// advent of code day #3 part #2

const commonItem2 = (line1, line2, line3) => {
    for(let i = 0; i < line1.length; i++) {
        for(let j = 0; j < line2.length; j++) {
            for(let k = 0; k < line3.length; k++) {
                if(line1[i] === line2[j] && line2[j] === line3[k]) {
                    return line1[i];
                }
            }
        }
    }
};

const alphabetPosition2 = (letter) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.indexOf(letter) + 1;
};

const main2 = (input) => {
    let result = 0;
    let linesArray = input.split("\n");

    for(let i = 0; i < linesArray.length; i += 3) {
        let sameLetter = commonItem2(linesArray[i],linesArray[i+1], linesArray[i+2]);
        result += alphabetPosition2(sameLetter);
    }
    return result;
};