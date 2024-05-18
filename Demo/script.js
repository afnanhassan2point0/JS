// Practicing JavaScript Programming


// making an object in Javascript
// let student = {
//     hisName: "Afnan",
//     rollNumber: 30,
//     id: 1,
//     cgpa: 3.8,
//     celebrity: false
// };

// for (let key in student) {
//     console.log("key :: ", key, student[key]);
// }




// String functions in Javascript
// let myIntroduction = "  Hello, I am Muhammad Afnan Hassan.I am a Programmer.  ";
// console.log(myIntroduction);// simply prints the variable string value
// console.log(myIntroduction.toLowerCase());//converts letters to lower case
// console.log(myIntroduction.toUpperCase());// converts to upper case
// console.log(myIntroduction.trim());// Removes white spaces
// console.log(myIntroduction.slice(14,35)); // gets substring
// let tempString = " @ B S I T 4th S e m e s t e r ";
// console.log(myIntroduction.concat(tempString)); // string concatenation
// console.log(myIntroduction.replace("Afnan", "Faizan")); // replaces data within strings




// GENERATING USERNAMES ON DEMAND
// let givenName = prompt("Hey, Enter you name here ");
// givenName = givenName.toLowerCase();
// let userName = "@" + givenName + givenName.length;
// alert(userName);




// AVERAGE OF MARKS OF STUDENTS IN A CLASS
// let marks = [88, 44, 54, 93, 92, 84, 90, 100, 33];
// console.log(marks);
// let average = 0;
// for (let i of marks) {
//     average += i;
// }
// average /= marks.length;
// console.log("Average marks :: ", average);




// // PRACTICAL ARRAY PROBLEMS
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift(); // deletes an item from the start of array
// companies.pop(); // deletes an item from the end of array
// companies.splice(2, 1, "Ola");
// companies.push("Amazon");




// ARROW FUNCTIONS
// // Q1 :: counts the vowels in a string
// let userValue = prompt("Please enter a string in ");
// userValue = userValue.toLowerCase();
// let vowelValues = "";
// let countVowels = 0;
// for (const char of userValue) {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         countVowels++;
//         // vowelValues.push(char);
//     }
// }
// console.log("The Number of Vowels in given sentence is ", countVowels);
// // alert("Collected vowels are :: ", vowelValues);
// // 2nd method :::
// const countVowels = (sentence) => {
//     let count = 0;
//     sentence.toLowerCase();
//     for (const letter of sentence) {
//         if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
//             count++;
//         }
//     }
//     return count;
// }



// CALLBACKS HELL :: 1
// WORKING WITH API's
// ADVANCED JAVASCRIPT
//
// function getData(dataID, nextData) { // defined a function, working for callbacks hell
//     setTimeout(() => {
//         console.log("hello ", dataID);
//         if (nextData) {
//             nextData();
//         }
//         else {
//             console.log("finished");
//         }
//     }, 2000);
// }

// getData(222, () => {
//     getData(333, () => {
//         getData(444, () => {
//             getData(234);
//         });
//     });
// });



// PROMISE METHOD :: 2

function getData(exeData, nextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is :: ", exeData);
            resolve("SeCcEcS");
            if (nextData) {
                nextData();
            }
            else {
                console.log("Program ends here!");
            }
        }, 3000);
    });
}