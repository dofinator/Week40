// OPGAVE 2

// A) Implement a "custom" filter() method by creating own function that does the same

let nameArray = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]

/* Min custom filter function som tager et array og en hvilken som helst function og derefter kalder
   denne function med array som parameter også kaldet callBack function  */
function myFilter(array, callback) {
    return callback(array)
}

function filterThisArrayByLetterA(array) {
    let newArray = []
    array.forEach(element => {
        if (element.includes("a")) {
            newArray.push(element)
        }
    });
    return newArray
}

console.log(myFilter(nameArray, filterThisArrayByLetterA))

// B) Implement a "custom" map() method by creating own function that does the same

function mapThisArray(array, callback) {
    return callback(array)
}

function myMap(array) {
    let newArray = []
    array.forEach(name => {
        newArray.push(name.split("").reverse().join(""))
    })
    return newArray
}

console.log(mapThisArray(nameArray, myMap))
