const s = [5, 7, 2];
function editInPlace(){
    "use strict";

    //s = [2, 5, 7];
    // can only change the const array using 
    //          Bracket Notation

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

editInPlace();

console.log(s);