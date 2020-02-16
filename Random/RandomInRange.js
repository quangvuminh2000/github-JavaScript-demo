function ourRandomRange(ourMin, ourMax){

    return Math.floor(Math.random() * (Math.abs(ourMax - ourMin) + 1)) + ourMin;
}

var minRange = 5,
    maxRange = 15;

var randomNum = ourRandomRange(minRange, maxRange);
console.log(randomNum);