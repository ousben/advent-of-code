// advent of code day #2 part #1

const convertLetterToShape = (letter) => {
    if(letter === "A" || letter === "X") {
        return "rock";
    } else if(letter === "B" || letter === "Y") {
        return "paper";
    } else if(letter === "C" || letter === "Z") {
        return "scissors";
    }
};

const shapeScore = (shape) => {
    switch(shape) {
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
    }
};

const outcomeScore = (opponentShape, playerShape) => {
    if(opponentShape === "rock" && playerShape === "paper" || opponentShape === "paper" && playerShape === "scissors" || opponentShape === "scissors" && playerShape === "rock") {
        return 6;
    } else if(opponentShape === playerShape) {
        return 3;
    } else {
        return 0;
    }
};

const main = (string) => {
    let result = 0;
    let linesArray = string.split("\n");

    for(let i = 0; i < linesArray.length; i++) {
        let line = linesArray[i];

        let opponent = ConvertLetterToShape(line[0]);
        let player = ConvertLetterToShape(line[2]);

        result += shapeScore(player) + outcomeScore(opponent, player);
    }
    return result;
};


// advent of code day #2 part #2

const convertLetterToOutcome = (letter) => {
    if(letter === "X") {
        return "loss";
    } else if(letter === "Y") {
        return "draw";
    } else if(letter === "Z") {
        return "win";
    }
};

const playerShape = (opponentShape, outcome) => {
    let playerShape = '';
    if(outcome === "draw") {
        playerShape = opponentShape;
    } else if(outcome === "loss") {
        if(opponentShape === "rock") {
            playerShape = "scissors";
        } else if(opponentShape === "paper") {
            playerShape = "rock";
        } else if(opponentShape === "scissors") {
            playerShape = "paper";
        }
    } else {
        if(opponentShape === "rock") {
            playerShape = "paper";
        } else if(opponentShape === "paper") {
            playerShape = "scissors";
        } else if(opponentShape === "scissors") {
            playerShape = "rock";
        }
    }
    return playerShape
};

const outcomeScore2 = (outcome) => {
    switch(outcome) {
        case "win":
            return 6;
        case "draw":
            return 3;
        case "loss":
            return 0;
    }
};

const main2 = (string) => {
    let result = 0;
    let linesArray = string.split("\n");

    for(let i = 0; i < linesArray.length; i++) {
        let line = linesArray[i];

        let opponent = convertLetterToShape(line[0]);
        let outcome = convertLetterToOutcome(line[2]);

        result += shapeScore(playerShape(opponent, outcome)) + outcomeScore2(outcome);
    }
    return result;
};