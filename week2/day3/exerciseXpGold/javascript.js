//--------------Exercise 1 : Divisible By Three---------------------//
let numbers = [123, 8409, 100053, 333333333, 7];
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  const numberRd = number % 3 === 0;
  console.log(numberRd);
}

//---------------Exercise 2 : Attendance--------------------//
let guestList = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
  }
  const nameUser = prompt("Enter your Name");
  if( nameUser in guestList) {
    const country = guestList[nameUser];
    console.log(`hi! I am ${nameUser}, and I am from ${country}`);
  } else {
    console.log("hi I am a guest.")
  }