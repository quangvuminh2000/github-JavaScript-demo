/// OLD Way
// var SpaceShutter = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
// };
class SpaceShutter{
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
};

var zeus = new SpaceShutter('Jupiter');

console.log(zeus.targetPlanet);

// Vegetable Class

function makeClass(){
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);