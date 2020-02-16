const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// Get the square of each number that is Int and possitive
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    // no need () around the argument if only one arg
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);

console.log(squaredIntegers);

