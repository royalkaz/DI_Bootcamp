//Retrieve the form and console.log it.
 let cnlForm = document.querySelector("form");
 console.log(cnlForm);

 //Retrieve the inputs by their id and console.log them.

 let firstName = document.getElementById("fname");
 let lastName = document.getElementById("lname");
 console.log(firstName);
 console.log(lastName);

 //Retrieve the inputs by their name attribute and console.log them.

 let inputName = document.getElementsByName("firstname");
 console.log(inputName)

 //When the user submits the form (ie. submit event listener)

 cnlForm.addEventListener("submit", function(event){
    event.preventDefault();
 })

// get the values of the input tags,

let firstNameValue = firstName.value.trim();
let lastNameValue = lastName.value.trim();
if(firstNameValue !== '' && lastNameValue !== ''){
    
}

// !!! TAMAMLANMAYIB

// * When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form. */