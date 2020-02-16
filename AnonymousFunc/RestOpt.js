
// const sum = (function() {
//     return function sum(x, y, z){
//         const args = [x, y, z];
//         return args.reduce((a, b) => a + b, 0);
//     };
// })();

// Rest Opt '...' will convert everything passed in into 1 array
const sum = (function() {
    return function sum(...args){
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3, 4));