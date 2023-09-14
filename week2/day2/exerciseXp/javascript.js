//Exercise 1: Simple If/Else Statement
let x=10
let z=9

if ( x > z ) {
    alert("x is the biggest number");
}
else if (x<z) {
    alert("x is the small number");
}
//Exercise 2: Chihuahua
let newDog = "Chihuahua";
console.log(newDog.length,'Check and display how many letters are in newDog.');
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
//Check if the variable newDog is equal to “Chihuahua”

// !!! if (newDog==="Chihuahua")
if(newDog) {
    alert("I love Chihuahuas, its my favorite dog breed");
}
else(console.log("I dont care, I prefer cats"));

//Exercise 3: Even Or Odd
//Prompt the user for a number and save it to a variable.
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}
//Exercise 4: Group Chat
/* Using the array above, console.log the number of users that are connected to the 
group chat based on the following rules: */
/* const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]; */
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
     const numberOfUsers = users.length;
         if (numberOfUsers === 0) {
         console.log("No one is online");
} 
        else if (numberOfUsers === 1) {
        console.log(`${users[0]} is online`);
}       else if (numberOfUsers === 2) {
        console.log(`${users[0]} and ${users[1]} are online`);
}       else {
              const additionalUsers = numberOfUsers - 2;
              console.log(`${users[0]}, ${users[1]}, and ${additionalUsers} more are online`);
}
