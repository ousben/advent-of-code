// day 1 - part 1

const myFunc = string => {
    if (typeof string !== "string") {
        throw new Error("Input must be a string");
    }
    let bothList = [[], []]
    let result = []
    let splitString = string.split("\n").map(item => {
        let splitArray = item.split("   ")
        return splitArray
    })
    splitString.forEach(item => {
        bothList[0].push(parseInt(item[0]))
        bothList[1].push(parseInt(item[1]))
    })
    bothList[0].sort()
    bothList[1].sort()
    for(let i = 0; i < bothList[0].length; i++) {
        if(bothList[0][i] > bothList[1][i]) {
            result.push(bothList[0][i] - bothList[1][i])
        } else {
            result.push(bothList[1][i] - bothList[0][i])
        }
    }
    return result.reduce((a,b)=> a + b, 0)
}

// day 1 - part 2

const myFunc2 = string => {
    if (typeof string !== "string") {
        throw new Error("Input must be a string");
    }
    let bothList = [[], []]
    let result = 0
    let splitString = string.split("\n").map(item => {
        let splitArray = item.split("   ")
        return splitArray
    })
    splitString.forEach(item => {
        bothList[0].push(parseInt(item[0]))
        bothList[1].push(parseInt(item[1]))
    })
    for(let i = 0; i < bothList[0].length; i++) {
        let times = bothList[1].filter(item => item === bothList[0][i]).length;
        let count = bothList[0][i] * times
        result += count
    }
    return result
}