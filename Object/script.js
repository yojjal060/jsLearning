// const person ={
//     name : ['yojjal', 'sharma'],
//     age:21,
//     bio:function(){
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf:function(){
//         console.log(`Hi! I'm ${this.name[0]}.`)
//     },

//     concatenante: function(name){
//         console.log([...name])
//     }
// }

// person.name;
// person.name[0];
// person.age;
// person.bio();

// person.introduceSelf();

// person.concatenante(person.name);


// const person2 = {
//     name:['lol'],
//     age:32,
//     occupation:'cockrider',
//     bio(){
//         console.log(`This is the way ${this.occupation}`);
//     }
// }
// person2.bio()

// function createPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.introduceSelf = function () {
//       console.log(`Hi! I'm ${this.name}.`);
//     };
//     return obj;
//   }

//   const salva = createPerson("salva")
//   salva.introduceSelf()


//   function Person6(name) {
//     this.name = name;
//     this.introduceSelf = function () {
//       console.log(`Hi! I'm ${this.name}.`);
//     };
//   }


//   const yojjal = new Person6("yojjal")
//   yojjal.introduceSelf()

//   const myNotification = new Notification("Hello!");

function sumOfTripledEvens(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            sum += array[i] * 3; // Triple the even number and add to sum
        }
        else{
            sum+=array[i];
        }
    }
    return sum;
}

console.log(sumOfTripledEvens([1,2,3])); 