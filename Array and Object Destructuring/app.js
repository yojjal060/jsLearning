// example 1 by swapping value of two variables
//array destructuring

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);


//example 2
//swapping elemens In a array
// const color = ["red","green","blue","black","white"];
// [colors[0], colors[4]] = [colors[4],colors[0]];
// console.log(color)

//example 3
//ASSIGNING array element to Variables
const colors = ["red","green","blue","black","white"];
const[firstColor,secondColor,ThirdColor,...restColor] = colors

console.log(firstColor)
console.log(restColor)


//example 4
// extract values from Objects
const person1 = {
    firstName:"Yojjal",
    lastName:"Sharma",
    age:21,
    job:"unemployed"
}

const person2 = {
    firstName:"Nischhal",
    lastName:"Bohora",
    age:75,
    job:"stalker"
}

// const {firstName,lastName,age,job} = person1
// console.log(firstName)//yojjal
// console.log(lastName)//sharma
// console.log(age)//21
// console.log(job)//unemployed

// const {firstName,lastName,age,job} = person2
// console.log(firstName)//Nischhal
// console.log(lastName)//Bohora
// console.log(age)//75
// console.log(job)//Stalker


//example 5
//DEstructuring in function parameter
function displayPerson({firstName, lastName, age, job}){
    console.log(`name:${firstName} ${lastName}`)
    console.log(`age:${age}`)
    console.log(`job:${job}`)
}

displayPerson(person1)

//code without destructuring
// const displayPerson = (person) => {
//     console.log(`name:${person.name}`);
//     console.log(`job:${person.job}`);
//   }
  
//   // Assuming person1 is defined somewhere in your code
//   const person1 = { name: 'John Doe', job: 'Developer' };
  
//   displayPerson(person1);





// A function that takes an array of two numbers and logs them
// const logNumbers = (numbers) => {
//     console.log(`First number: ${numbers[0]}`);
//     console.log(`Second number: ${numbers[1]}`);
//   }
  
//   // An array of two numbers
//   const numbers = [5, 10];
  
//   logNumbers(numbers);


//now destructuring above code
const numbers = [5,10];
const [firstNumber , lastNumber] = numbers

const logNumbers = (numbers) =>{
    console.log(`First number : ${firstNumber}`);
    console.log(`second number : ${lastNumber}`);
    
}

logNumbers(numbers)