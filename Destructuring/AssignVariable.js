// Assign variables from array
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);


// Change the place of variable from array
let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a];
})();

console.log(a, b);

