// advent of code day #4 part #1

const stringSeparation = (string) => {
    result = [];

    let string1 = string.split("\n");
    let string2 = string1.join("-");
    let string3 = string2.split(",");
    let string4 = string3.join("-");
    let finalString = string4.split("-");
    for(let i = 0; i < finalString.length; i++) {
        result.push(parseInt(finalString[i]));
    }
    return result;
};

const main = (string) => {
    let result = 0;
    let line = string.split("\n");
    for(let i = 0; i < line.length; i++) {
        let integers = stringSeparation(line[i]);
        if(integers[2] >= integers[0] && integers[3] <= integers[1] || integers[0] >= integers[2] && integers[1] <= integers[3]) {
            result++;
        }
    }
    return result;
};

// advent of code day #4 part #2

const stringSeparation2 = (string) => {
    result = [];

    let string1 = string.split("\n");
    let string2 = string1.join("-");
    let string3 = string2.split(",");
    let string4 = string3.join("-");
    let finalString = string4.split("-");
    for(let i = 0; i < finalString.length; i++) {
        result.push(parseInt(finalString[i]));
    }
    return result;
}

const main2 = (string) => {
    let result = 0;
    let line = string.split("\n");
    for(let i = 0; i < line.length; i++) {
        let integers = stringSeparation(line[i]);
        if(integers[2] >= integers[0] && integers[3] <= integers[1] || integers[0] >= integers[2] && integers[1] <= integers[3]) {
            result++;
        } else if(integers[2] >= integers[0] && integers[2] <= integers[1] || integers[3] >= integers[0] && integers[3] <= integers[1]) {
            result++;
        }
    }
    return result;
};