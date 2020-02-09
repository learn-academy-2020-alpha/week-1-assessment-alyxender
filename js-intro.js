// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended


//-------------------------------------------------------------------------

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.

// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"


/*
var temp1 = 35
var temp2 = 350
var temp3 = 212
// Creating boiling point temp
var tempBoil = 212

//Creating a series of functions for each temp

const isItBoiling1 = (butseriouslyisit) => {
    if(temp1 < tempBoil ) {
        return `${temp1} is below the boiling point`
    }
}

const isItBoiling2 = (butseriouslyisit) => {
    if(temp2 > tempBoil ) {
        return `${temp2} is above the boiling point`
    }
}

const isItBoiling3 = (butseriouslyisit) => {
    if(temp3 || tempBoil ) {
        return `${temp3} is at the boiling point`
    }
}

//Logging the results to console.
//Expected result ----> 35 is below the boiling point
350 is above the boiling point
212 is at the boiling point
console.log(isItBoiling1())
console.log(isItBoiling2())
console.log(isItBoiling3())


*/

//-------------------------------------------------------------


// // --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// // Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]
/*
var myNumbers1 = [3, 7, 0, 6, -9]


//Creation of multiply function
const multiplyBy = (multiplied) => {
    for(let i=0; i<myNumbers1.length; i++){
    console.log(myNumbers1[i] * 5);
    }
}

// Calling and logging the multiplication 
multiplyBy()

*/
//--------------------------------


// // --------------------3) Create a function that multiplies each number in the array by 5 using map.
// // Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]


/*

//Predefined variable
var myNumbers2 = [8, -7, 0, 6, 2]

//Creating the new array with multiplication
const multiplyByArr = myNumbers2.map(function(value){
    return value * 5
})


//Logging the multiply. 
console.log(multiplyByArr)

*/
//--------------------------

// // --------------------4) Create a function that removes all the vowels from a string.
// // Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"


/*
var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"


//Creation of new function to remove vowels
const nayVow = defNoVows => {
  let newArray1 = defNoVows.split("")
  let newNewArray = newArray1.filter(value => value.toLowerCase() !== "a" && value.toLowerCase() !== "e" && value.toLowerCase() !== "i" && value.toLowerCase() !== "o" && value.toLowerCase() !== "u")
  let totesNewArray = newNewArray.join("")
  return totesNewArray
}

//Logging the strings without vowels
console.log(nayVow(stringWithVowels1));
console.log(nayVow(stringWithVowels2));


*/

//--------------------------

// // --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// // Copy and paste or rewrite the function. Use the test variables provided below.

/*

var notAString1 = true
var notAString2 = 42

//Creation of new function to remove vowels
const nayVow = defNoVows => {
if(typeof(defNoVows)==="string") {
    let newArray1 = defNoVows.split("")
  let newNewArray = newArray1.filter(value => value.toLowerCase() !== "a" && value.toLowerCase() !== "e" && value.toLowerCase() !== "i" && value.toLowerCase() !== "o" && value.toLowerCase() !== "u")
  let totesNewArray = newNewArray.join("")
  return totesNewArray
} else { return "Not a string, bro"}
}

//Logging the strings without vowels (or spits out the "Not a string, bro")
console.log(nayVow(notAString1));
console.log(nayVow(notAString2));


*/
//-----------------------------


// // --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// // Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

/*

var toonimals = [ {name: "Itchy", animal: "mouse"}, 
{name: "Stimpy", animal: "cat"}, 
{name: "Daffy", animal: "duck"}, 
{name: "Scratchy", animal: "cat"}, 
{name: "Ren", animal: "dog"}, 
{name: "Felix", animal: "cat"}]

//Creation of function that will filter out only cats from the above array

const onlyCats = (array) => {
    let newArr = array.filter(value=> value.animal==="cat")
  return newArr
}

//Logging only the kitty cats
console.log(onlyCats(toonimals))
*/
//-----------------------------------------



// // --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// // Expected output: "Itchy" "Daffy" "Ren"

/*

//Copied array from above
var toonimals = [ {name: "Itchy", animal: "mouse"}, 
{name: "Stimpy", animal: "cat"}, 
{name: "Daffy", animal: "duck"}, 
{name: "Scratchy", animal: "cat"}, 
{name: "Ren", animal: "dog"}, 
{name: "Felix", animal: "cat"}]

//Creation of function that will filter through the array for only non-kitty cats

const noKittyNoNames = (array) => {
    return array.filter(value => value.animal !== "cat").map(value => value.name)
}

//Logging all the other animals, minus meow meows :(
console.log(noKittyNoNames(toonimals))

*/