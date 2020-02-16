// Anonymous Func Type 1
const magic_1 = function() {
    return new Date();
};

// Anonymous Func Type 2
const magic_2 = () => {
    return new Date();
};

// Anonymous Func Type 3 (return only one value)
const magic_3 = () => new Date();


console.log(magic_1());
console.log(magic_2());
console.log(magic_3());

console.log("End of project");

console.log(Math.random());