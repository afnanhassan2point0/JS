const accountID = 1133;
var accountName = "Afnan Hassan";
let accountOwner = "UBL";
accountCity = "Karachi";


console.log(accountID);
console.table([accountID, accountName, accountOwner, accountCity]);



// my practice work
// QUE 1 : delete duplicate items from an array
let myArray = [1, 7, 9, 9, 8, 3, 4, 2, 4, 5, 6, 8];
for (let i = 0; i < myArray.length; i++) {
    for (let j = i + 1; j < myArray.length; j++) {
        if (myArray[i] == myArray[j]) {
            myArray.splice(j, 1);
        }
    }
}
console.log(myArray);

//
// QUE 2 : creating & updating an object
const Person = {
    name: "Muhammad Afnan",
    age: 24,
    occupation: "Engineer",
}
console.log(Person);

function changePerson(name, age, job) {
    Person.name = name;
    Person.age = age;
    Person.occupation = job;
}

changePerson("Ali Asghar", 28, "Farmer");
console.log(Person);

//
// QUE 3 : passing a function to a function
function greet(name) {
    console.log(`Hello ${name}, Nice to meet you here!`);
}

function mainFunc(anyFunc, msg) {
    anyFunc(msg);
}

mainFunc(greet, "Afnan");