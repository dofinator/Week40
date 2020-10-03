// OPGAVE 4

/* A) ["Hassan", "Peter", "Carla", "Boline"];
   Use join to create a single string from all, like this:  Hassan#Peter#Carla#Boline */

let nameArray = ["Hassan", "Peter", "Carla", "Boline"]

console.log(nameArray.join("#"))

/* B) Given this array: var numbers = [2, 3, 67, 33];
      Create a reducer callback that, with reduce(..),  will return the sum (105) of all values in numbers */

let numberArray = [2, 3, 67, 33]

function myFunc1(total, num) {
    return total + num;
}

console.log(numberArray.reduce(myFunc1))

// C)  Given this array:
let members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }
]
/*Create a reducer callback that, using the Array’s  reduce() method,
will return the average age of all members (25 for the provided array).*/

function getAverageAge(array) {
    return array.reduce((accumulated, member) => accumulated + member.age,0) / array.length
}

console.log(getAverageAge(members))

// D) 