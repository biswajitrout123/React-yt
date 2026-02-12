import React from 'react'

const App = () => {

  // CLEAR THE LOCAL STORAGE:
  // localStorage.clear()

  // Clear the SESSION STORAGE:
  // sessionStorage.clear()

  // FOR SAVE DATA ON LOCAL STORAGHE
  // localStorage.setItem("user", "Bisu");

  // FOR GET THE LOCAL-STORAGE ITEM
  // const user = localStorage.getItem('user')
  // console.log(user);    //Bisu
  
  // localStorage.setItem('age', '21')

  // const age = localStorage.getItem('age');
  // console.log(age);        //21

  // console.log(user, age);    //Bisu  21
  
  // localStorage.removeItem('user')     //DELETE USER
  // localStorage.removeItem('age')      //DELETE AGE

  // ---------------------------------------------------------------------------------------------

  // const user = {
  //   username: 'Biswajit',
  //   age : 21,
  //   city: 'Dhenkanal'
  // }

  // console.log(user);

  // STORE THIS ON LOCAL STORAGE : THE SYNTAX IS! 
  // localStorage.setItem('user',JSON.stringify(user))
  
// --------------------------------------------------------------------------------------------------------

  // GETTING THE LOCAL STORAGE ITEMS:
  // const user = JSON.parse(localStorage.getItem('user'))
  // console.log(user);
  

  return (
    <div>
      App
    </div>
  )
}

export default App
