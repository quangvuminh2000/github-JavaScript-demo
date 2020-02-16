// Assign values taken directly from an obj to variable

var voxel = {x: 3.6, y: 7.4, z: 6.54};

// Normal Assignment :
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

// Destructuring Assignment : 
const {x : a, y : b, z : c} = voxel;


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorow: 79
};

Object.freeze(AVG_TEMPERATURES.today);

function getTempOfTmrw(avgTemperatures){
    "use strict";
    const {tomorow : tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));