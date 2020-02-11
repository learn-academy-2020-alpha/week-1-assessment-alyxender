// ASSESSMENT 1: INTRO TO JAVASCRIPT TESTING WITH JEST
// Coding practical questions

// To set up the testing environment run the following commands in terminal
// $ npm -g install yarn
// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.
/*
describe("addThemUp", () => {
    test ("a function called addThemUp that will take two numbers as an argument and then returns the sum", () => {
        expect(addThemUp(1,1)).toEqual(2)
    })
})



// --------------------1b) See the test fail. THEN write the code to make the test pass.

//Task failed successfully! Yay! 
//Here comes the task passing! ULTRA YAY!
const addThemUp = (num1, num2) => {
    return num1 + num2
    
}

*/

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe("triangleArea", () => {
    test("A function called triangleArea that takes the base and the height of a triange and returns the area", () => {
        expect(triangleArea(1,2)).toEqual(1)
    })
})




// --------------------2b) See the test fail. THEN write the code to make the test pass.

//TEST TOTALLY FAILED YAHOOOO!

//Bettin' 5 bucks this will pass
triangleArea = (b, h) => {
    return b*h/2
}


//you owe me $5