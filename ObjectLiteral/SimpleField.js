//Normal Object Literal
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};

console.log(createPerson("Vu Minh Quan", 12, "Unknow"));

// Simple Field
const createCustomer = (name, age, gender, CustomerID) => ( { name, age, gender, CustomerID } );

console.log(createCustomer("Vu Minh Quang", 19, "male", "abch12g"));