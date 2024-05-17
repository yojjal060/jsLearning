const array1 = [1,3,4,5,6]
const fruits = ['apple','banana','cherry'];

const[first ,second,third,fourth,fifth] = array1




// map() function
// example 1
array1.map((values)=>{
    console.log(values);
})

//example 2 
let a = array1.map((num)=>{
    num*num
    console.log(num)
    return num;//for array return
})
console.log(a)

//example 3
const upperCaseFruits = fruits.map((fruit)=>{
    fruit.toUpperCase();
    console.log(fruit)
    return fruit;
})

// const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(upperCaseFruits)

//filter method in js
const oddnumbers = array1.filter(num => num%2!== 0);
console.log(oddnumbers)

//example 2 finding out word less than 6 letters
const longwords = fruits.filter(word => word.length<6);
console.log(longwords)

//example3
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 }
];

const userOver30 = users.filter(user => user.age<=30);

console.log(userOver30)

//reduce example 1
const sum = array1.reduce((value,index) => value + index)
console.log(sum);

//example 2 concatenate
const words = ['Hello', ' ', 'world', '!'];
const sentence = words.reduce((value,index)=>value + index);
console.log(sentence)

//example 3
const fruit = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
const fruitCounts = fruit.reduce((accumulator, fruit) => {
    if (accumulator[fruit]) {
      accumulator[fruit]++;
    } else {
      accumulator[fruit] = 1;
    }
    return accumulator;
  }, {});
  console.log(fruitCounts);