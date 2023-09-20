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

