// Ex1
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
}

console.log("year" + car.year);


// Ex2 
const person = {
    name: 'Halley',
    address : {
        street: 'King St',
        city: 'London',
        country: 'England'
    }
}

console.log("street: " + person.address.street)


// Ex3 
const student = {
    name: 'Alex',
    grades: {
        math: 9,
        english: 7
    }
}

console.log("math: ", student["grades"]["math"])


// Ex4
const settings = {
    volume: 75,
    brightness: 80
}
settings.volume = 90;
console.log(settings)



// Ex5
const bike = {
}
bike.color = "red";
console.log(bike);



// Ex6
const employee = {
    name: 'Alex',
    age: 25
}
delete employee.age;
console.log(employee);



// Ex7
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school);