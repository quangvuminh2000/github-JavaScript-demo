const bicycle = {
    gear : 2,
    setGear (newGear){              /// DECLARATIVE FUNCTION
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
// Show the Function
console.log(bicycle);