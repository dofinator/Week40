import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import jokeFacade from "./jokeFacade"
import userFacade from "./userFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */

function makeListItems() {
  const jokes = jokeFacade.getJokes()
  let jokeLis = jokes.map(joke => `<li> ${joke} </li>`)
  const listOfJokes = jokeLis.join("")
  document.getElementById("jokes").innerHTML = listOfJokes
}
makeListItems()

function getJokeById() {
  event.preventDefault()
  let jokeID = document.getElementById("getJoke").value
  let joke = jokeFacade.getJokeById(jokeID)
  document.getElementById("pTag").innerHTML = joke
}

function addNewJoke() {
  event.preventDefault()
  let newJoke = document.getElementById("addJoke").value
  jokeFacade.addJoke(newJoke)
  makeListItems()
}

document.getElementById("submitGetJoke").addEventListener("click", getJokeById)
document.getElementById("submitAddJoke").addEventListener("click", addNewJoke)
let array = []

/* JS For Exercise-2 below */
function functionForClickEventEx2() {
  fetch('https://studypoints.info/jokes/api/jokes/period/hour')
    .then(res => res.json())
    .then(data => document.getElementById("pTag2").innerHTML = data.joke)
}

setInterval(functionForClickEventEx2, 60 * 60 * 1000);

document.getElementById("buttonEx2").addEventListener("click", functionForClickEventEx2)




/* JS For Exercise-3 below */

// GET all users
function fetchUsersToTable() {
  userFacade.getUsers()
    .then(users => {

      const userRows = users.map(user => getTableRow(user))

      const userRowsAsString = userRows.join("")
      document.getElementById("allUserRows").innerHTML = userRowsAsString

    })
}

// call get all users
fetchUsersToTable()

function getTableRow(user) {
  return `<tr><td>${user.id}</td><td>${user.age}</td><td>${user.name}</td><td>${user.gender}</td><td>${user.email}</td></tr>`
}

// POST user from form id's
function addUserFromForm() {
  let age = document.getElementById("ageId").value
  let name = document.getElementById("nameId").value
  let gender = document.getElementById("genderId").value
  let email = document.getElementById("emailId").value

  const newUser = {
    age,
    name,
    gender,
    email
  }

  userFacade.addUser(newUser)
    .then(user => alert(JSON.stringify(user)))

}

// eventlistener wich calls the add user function
document.getElementById("addNewUser").addEventListener("click", event => {
  event.preventDefault()
  addUserFromForm()
  fetchUsersToTable()
  document.getElementById("addForm").reset()
})

// GET user by id
function getUserById() {

  let id = document.getElementById("userId").value
  let result


  userFacade.getUser(id)
    .then(user => {
      if (id == user.id) {
        result = user;
      }
      document.getElementById("pUser").innerText =
        `"id": ${result.id},
      "age": ${result.age},
      "name": ${result.name},
      "gender": ${result.gender},
      "email": ${result.email}`
    }).catch(err => {
      if (err.status) {
        err.fullError.then(e => console.log(e.detail))
      }
      else { console.log("Network error"); }
    })
    
}


document.getElementById("but").addEventListener("click", event => {
  event.preventDefault()
  getUserById()
})

// DELETE user from id

function deleteUser() {

  let userId = document.getElementById("deleteUserId").value
  userFacade.deleteUser(userId)

}

document.getElementById("deleteBut").addEventListener("click", event => {
  event.preventDefault()
  deleteUser()
  fetchUsersToTable()
})


// PUT user

function editExistingUser() {

  let id = document.getElementById("editId").value
  let age = document.getElementById("editAgeId").value
  let name = document.getElementById("editNameId").value
  let gender = document.getElementById("editGenderId").value
  let email = document.getElementById("editEmailId").value

  const newUser = {
    id,
    age,
    name,
    gender,
    email
  }
  userFacade.editUser(newUser)
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => console.log(e.detail))
      }
      else { console.log("Network error"); }
    })

}

document.getElementById("editUser").addEventListener("click", event => {
  event.preventDefault()
  editExistingUser()
  fetchUsersToTable()
})


/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault()
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html")



