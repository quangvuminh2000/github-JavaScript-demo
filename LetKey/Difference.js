// The differences between let and var
// let will not let you declare variable twice
let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk(){
    "use strict"; // trigger strict mode for this function

    catName = "Oliver";
    quote = catName + " says Meow!";
}

catTalk();