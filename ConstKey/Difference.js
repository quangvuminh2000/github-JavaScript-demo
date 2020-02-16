function printManyTimes(str){
    "use strict";

    const SENTENCE = str + " is cool!";

    //sentence = str + " is amazing!";

    for (let i = 0; i < str.length; i += 2){
        console.log(SENTENCE);
    }

}

printManyTimes("Quang");

// const key variables can not be re-assigned
// always use CAPITAL letter to name const var


// in project should use let and const 
// only use var in some circumstances