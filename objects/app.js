// let user={
//     age : 30,
//     name : "Yojjal"
// }

// user.isAdmin = true;

// delete user.age;

// console.log(user.name)
// console.log(user.age)
// console.log(user.isAdmin)


// //for multiword proporties
// // user.likes birds = true; //gives syntax error

// // use square brackets instead
// user["likes birds"] = true;

// console.log(user["likes birds"])



// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("What do you want to know about the user?", "name");
  
//   // access by variable
//   alert( user[key] ); // John (if enter "name")

// let fruit = prompt("Which fruit to buy?", "ball");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.ball ); // 5 if fruit="apple"

let user = {
    name : "john",
    age : 20,
    id : 1,
}

for(let key in user){
    // alert(key)

    alert(user[key])
}