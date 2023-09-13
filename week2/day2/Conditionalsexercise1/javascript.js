/* //This car will only let you drive if you are over 18. Make it do the following:

let age = prompt("enter you age")
if (age==18){
    alert("Congratulations on your first year of driving. Enjoy the ride!")
}
else if (age <18){
    alert("Sorry, you are too young to drive this car. Powering off")
} 
else if  (age >18){
    alert( "Powering On. Enjoy the ride!" )
} 
console.log(age) */

///Exercise 2
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}
