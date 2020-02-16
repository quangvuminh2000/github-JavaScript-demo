// Spread Operator allow to copy all of the elements not to make lable
const someMonths = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

let selectionMonths;
(function() {
    selectionMonths = [...someMonths]; // make copy of content - need to be in [...args]
    someMonths[0] = 'Potatoes';
})();

console.log(selectionMonths);