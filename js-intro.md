# ASSESSMENT 1: INTRO TO JAVASCRIPT
## Tech Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.   

1. What is a function? Why would you use one?

  Your answer: 
  A function is a fundamental way of containing a list of instructions to be called later in our code. 

  Researched answer:
  A JavaScript function is a block of code designed to perform a particular task. It is later executed by invoking(calling it).

2. What is the difference between map and filter?

  Your answer: 
  While both are higher order functions that will create an array, they perform two distinctly (but very cool!) different functions. 
  .map() will iterate through an array and then create a new array based upon the length of the original array. 
  .filter() will iterate through an array and then create a new array based upon the truthy values that we're searching for in the original array. 

  Researched answer:
  They both return a new array. 
  map returns a new array of elements where you have applied some function on the element so that it changes the original element (typically).
  filter returns a new array of the elements of the original array (with no change to the original values). 
  filter will only return elements where the function you specify returns a value of true for each element passed to the function.


3. What is the difference between console.log() and return?

  Your answer:
  console.log() is strictly for our (developers/human/mildly intelligent organic beings with optic receptics) eyes to see the computed result of whatever is called.
  Return will pass information into an argument without logging/printing to the console for us to see unless specified to do so by calling a console.log()

  Researched answer:
  The main purpose of the return value, is to use the function return value like you would have use a variable value.
  the console.log(); is a function (you can see the brackets) that will write the argument value on the console. 
  And only the debuging console, in a browser you will not see anything on the screen.


4. In regards to functions, what is an argument?

  Your answer: 
  An argument is a value that is passed to the function. 

  Researched answer:
  Function arguments are the real values passed to (and received by) the function.
  

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer:
  There are generally two people sharing a screen while one of them operates a computer. 
  A driver is the person who is operating the computer (via mouse/keyboard/Matt's magic Minority Report-Nintendo-Power-Glove finger controller)
  A navigator is the person who is overseeing the code and providing feedback and suggestions to the driver. 
  Each role is interchangable and generally switched between both people after 20-30 minute intervals. 

  Researched answer:
  Pair programming has a slew of different techniques/styles depending on where you look, but overall the most common in an agile development environment is the "Driver/Navigator" technique.
  A driver generally drives the computer, performing the heavy work of coding and 'navigating' while the Navigator will generally be the one looking out for errors and keeping focus on the overall scope of work.


6. What is TDD? Describe the work flow associated with TDD.

  Your answer:
  TDD stands for Test-driven development, it is utilized for quality assurance in our code. 
  In TDD we can use a technique called Red-Green Refactoring that will allow us to run a series of test using a specific tool suite that will allow us to check if our code will work or not.
  The workflow of this would be as follows:
  - Write a test (This entails its description and expected outcome for passing).
  - Run the test and have it fail (Red)
  - Write the code that will (hopefully) execute our expected outcome described.
  - Run the test again for a passing outcome (if pass, Green)
  - If a fail has resulted, refactor the code as neccessary until pass is accheived. 

  Researched answer:
  Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the code is improved so that the tests pass. 
  This is opposed to software development that allows code to be added that is not proven to meet requirements.


7. What is something we did in class this week you found helpful?  

  Your answer: 
  I found utilizing Jest for our tests to be really helpful in allowing me to look at code in a completely different way than I am used to. 
  The action of basically 'reverse' coding was similar to a technique used in learning how to draw for the first time. 
  This is where the artists first draws an object as they see it, the outcome (usually) is a very terrible drawing but the next step is to flip their subject upside down (take a photo of the subject and flip it upside down) then drawing the upside down image. 
  In most cases, this causes the artist to draw only what they see, not what they think they see, thus resulting in a significantly improved drawing. 
  Testing had the same effect on me, first looking for the expected outcome and testing for it, then applying what I know to create said outcome. 



## Looking Ahead: Terms for Next Week

Define the following terms to the best of your ability.

- React: a JS library created by Facebook

- Yarn: a package manager that will bring in a set of repo's required to use Jest. 

- React State: an object that is built into React. 

- CRUD an acronym of the four basic functions of persistent storage. 

- this: used to reference back to the title of an object class name from within itself. 
