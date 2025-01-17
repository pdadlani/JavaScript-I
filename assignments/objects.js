// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}


//Solution 1: Individually creating each intern object. Tedious and not efficient. 
// Write your intern objects here:
// const mitzi = {
//   id: 1,
//   name: "Mitzi",
//   email: "mmelloy0@psu.edu",
//   gender: "F"
// }

// const kennan = {
//   id: 2,
//   name: "Kennan",
//   email: "kdiben1@tinypic.com",
//   gender: "M",
// }

// const keven = {
//   id: "3",
//   name: "Keven",
//   email: "kummery2@wikimedia.org",
//   gender: "M"
// }

// const gannie = {
//   id: "4",
//   name: "Gannie",
//   email: "gmartinson3@illinois.edu",
//   gender: "M"
// }

// const antonietta = {
//   id: "5",
//   name: "Antonietta",
//   email: "adaine5@samsung.com",
//   gender: "F"
// }

//Solution 2: function that dynamically creates intern objects by taking in multiple arguments
// function intern(id, name, email, gender) {
//   this.id = id;
//   this.name = name;
//   this.email = email;
//   this.gender = gender;
// }

// const mitzi = new intern(1, 'Mitzi', 'mmelloy0@psu.edu', 'F');
// const kennan = new intern(2, 'Kennan', 'kdiben1@tinypic.com', 'M');
// const keven = new intern(3, 'Keven', 'kummery2@wikimedia.org', 'M');
// const gannie = new intern(4, 'Gannie', 'gmartinson3@illinois.edu', 'M');
// const antonietta = new intern(5, 'Antonietta', 'adaine5@samsung.com', 'F');


//Solution 3: created intern objects using a constructor function
function Intern(obj) {
  this.id = obj.id;
  this.name = obj.name;
  this.email = obj.email;
  this.gender = obj.gender;
}

const mitzi = new Intern({id: 1, name: 'Mitzi', email: 'mmelloy0@psu.edu', gender: 'F'});
const kennan = new Intern({ id: 2, name: 'Kennan', email: 'kdiben1@tinypic.com', gender: 'M' });
const keven = new Intern({ id: 3, name: 'Keven', email: 'kummery2@wikimedia.org', gender: 'M' });
const gannie = new Intern({ id: 4, name: 'Gannie', email: 'gmartinson3@illinois.edu', gender: 'M' });
const antonietta = new Intern({ id: 5, name: 'Antonietta', email: 'adaine5@samsung.com', gender: 'F' });





// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzi.name);

// Kennan's ID
console.log(kennan.id);

// Keven's email
console.log(keven.email);

// Gannie's name
console.log(gannie.name);

// Antonietta's Gender
console.log(antonietta.gender);


// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
kennan.speak = function() {return "Hello, my name is " + this.name + "!"};
console.log(kennan.speak());


// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
antonietta.multiplyNums = function(num1, num2) {return num1*num2};
console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: 'Susan',
  age: '70',
  speak: function() {
    console.log(`Hello, my name is ${this.name} !`);
  },

  child: {
    name: 'George',
    age: '50',
    speak: function() {
      console.log(`Hello, my name is ${this.name} !`);
    },

    grandchild: {
      name: 'Sam',
      age: '30',
      speak: function() {
        console.log(`Hello, my name is ${this.name} !`);
      }
    }
  }
}



// Log the parent object's name
console.log(parent.name);

// Log the child's age
console.log(parent.child.age);

// Log the name and age of the grandchild
console.log(parent.child.grandchild);

// Have the parent speak
(parent.speak());

// Have the child speak
(parent.child.speak());

// Have the grandchild speak
(parent.child.grandchild.speak());
