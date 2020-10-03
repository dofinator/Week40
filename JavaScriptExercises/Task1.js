// OPGAVE 2

// ***** TRICK HOLD MUSEN OVER METODER FOR AT SE BETYDNING *****

// A) Using the filter method to return names containing the letter a
let nameArray = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]

// jeg kallder filter() functionen hvor i jeg bruger en arrow function
let filteredNameArray = nameArray.filter(n => n.includes("a"))

console.log(filteredNameArray)

// B) Using the map method to return a new array with all names spelled backwards
/* Jeg bruger split("") som tager n(som er et navn) og splitter den strings bogstaver op og danner et nyt
   array. 
   Navnet Hassan.split("") = array['H','a','s','s','s','a']
   Derefter array.reverse() = array['n','a','s','s','a','H']
   Til sidst array.join("") = "nassaH"                                                                  */
let reversedNameArray = nameArray.map(n => n.split("").reverse().join(""))

console.log(reversedNameArray)

