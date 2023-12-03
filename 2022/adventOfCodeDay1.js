// advent of code day #1 part #1

function elfCalories(string) {
    let result = 0;
    let persons = string.split('\n\n');
    for(let i  = 0; i < persons.length; i++) {
        let meal = persons[i].split("\n");
        let sum = 0
        for(let j = 0; j < meal.length; j++) {
            sum += parseInt(meal[j]);
        }
        console.log(sum);
        if(sum > result) {
            result = sum;
        }
    }
    return result;
}


// advent of code day #1 part #2

function greatestSum(string) {
    let caloriesList = [];
    let persons = string.split("\n\n");
    for(let i = 0; i < persons.length - 1; i++) {
        let meal = persons[i].split("\n");
        let sum = 0;
        for(let j = 0; j < meal.length; j++) {
            sum += parseInt(meal[j]);
        }
        caloriesList.push(sum);
    }
    for(let k = 1; k < caloriesList.length; k++) {
        for(let l = k-1; l > -1; l--) {
            if(caloriesList[l+1] < caloriesList[l]) {
                [caloriesList[l+1], caloriesList[l]] = [caloriesList[l], caloriesList[l+1]];
            }
        }
    }
    return caloriesList[caloriesList.length - 1] + caloriesList[caloriesList.length - 2] + caloriesList[caloriesList.length - 3];
}