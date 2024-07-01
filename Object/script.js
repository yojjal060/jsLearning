const person ={
    name : ['yojjal', 'sharma'],
    age:21,
    bio:function(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf:function(){
        console.log(`Hi! I'm ${this.name[0]}.`)
    },

    concatenante: function(name){
        console.log([...name])
    }
}

person.name;
person.name[0];
person.age;
person.bio();

person.introduceSelf();
    
person.concatenante(person.name);
