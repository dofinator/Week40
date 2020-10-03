// OPGAVE 3

/* A) Given an array [1, 3, 5, 10, 11], use map() and a sufficient callback to map 
numbers into this [4,8,15,21,11] */

let numbers = [1, 3, 5, 10, 11]

function returnNewNumbers(array, callback) {
    return callback(array)
}

function makeNewNumbers(array) {
    let index = 0
    let newArray = array.map(function (n) {
        if (n != 11) {
            index++
            return n + array[index]
        } else return n
    })
    return newArray
}

console.log(returnNewNumbers(numbers, makeNewNumbers))

/* B) 
     Use map() to create the <a>’s for a navigation set and eventually a string like below 
    (use join() to get the string of <a>’s):

<nav>
  <a href=””>Hassan</a>
  <a href=””>Peter</a>
  <a href=””>Jan</a>
  <a href=””>Boline</a>
</nav>                                          */

let nameArray = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]

// <a href=””>
// </a>

let newNameArray = nameArray.map(function(n){
    let name = n.split("")
    name.unshift("<a href=””>")
    name.push("</a>\n")
    return name.join("")
})

newNameArray.unshift("<nav>\n")
newNameArray.push("</nav>")

console.log(newNameArray.join(""))

/* C) 
      Use map()+(join + ..) to create a string, representing a 
      two column table, for the data given below                */

let persons = [
    { name: "Hassan", phone: "1234567" }, 
    { name: "Peter", phone: "675843" }, 
    { name: "Jan", phone: "98547" }, 
    { name: "Boline", phone: "79345" }
];

let newPersons = persons.map()


//let newPersons = persons.map()

