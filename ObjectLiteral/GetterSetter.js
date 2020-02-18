// Use getters and setters to control access to an obj
class Book {
    constructor(author) {
        this._author = author;  // '_' means the private variables
    }
    // getter
    get writer(){
        return this._author;
    }
    // setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

// Example 
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        // getter
        get temperature(){
            return this._temp;
        }
        // setter
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature; // Getter and Setter are access similar to properties
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);