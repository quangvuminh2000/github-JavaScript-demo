function checkScope(){
"use strict";
    let i = "function scope";
    if (true){
        let i = "block scope";
        console.log("Block scope i is : ", i);
    }
    console.log("Function scope i is : ", i);
    return i;
}

checkScope();
// Scope of let is limitted to the 
// block statement or expression
// it was declared in