// import functions and grab DOM elements

const nameInput = document.getElementById('name-input')
const button = document.getElementById('btn')
const nameDiv = document.getElementById('name')

const headerColor = document.getElementById('header')
const footerColor = document.getElementById('footer')

// let state

// set event listeners 

button.addEventListener('click', () => {
  const result = nameInput.value;
  nameDiv.textContent = result

}); 

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
