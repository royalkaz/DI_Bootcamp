//-----------------------Exercise 1 : Information------------------------------//
function infoAboutMe(){
    const name = "Royal";
    const age = 35;
    const hobbies = ["geming","playing","Chess gameing","hiking"]
    console.log(`My name is ${name}. I am ${age} year old, and I enjoy ${hobbies[2]}`);
}
infoAboutMe()

function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`His name is ${personName} his age is ${personAge}, his favorite color ${personFavoriteColor}`)
}
infoAboutPerson("Arzu", 26, "yellow");
infoAboutPerson("Hemid", 38, "black");

//-------------------Exercise 2 : Tips--------------------------------//
function calculateTip(){
    
    const billAmount = prompt("hesab ne qederdir")
     const billAmountNum = Number(billAmount)
        let percentTip;
    if(billAmountNum < 50){
        percentTip = 0.2;
    } else if(billAmountNum >= 50 && billAmountNum < 200){
        percentTip = 0.15;
    } else {
        percentTip = 0.1;
    }
    const amountTip = billAmountNum * percentTip
    const finalAmount = billAmountNum + amountTip

    console.log(` faiz meblegi: ${amountTip}`);
    console.log(`yekun mebleg:${finalAmount}`);
}
calculateTip()

//-------------------Exercise 3 : Find The Numbers Divisible By 23----------------------------------//
let sum = 0;
function isDivisible(){
 for(let i = 0; i <= 500; i++){
    if(i%25 === 0){
        console.log(i)
        sum += i;
    }
 }
 console.log( `0 dan 500 qeder olan 23 bolunen butun ededlerin cemi.: ${sum}`)
}
isDivisible()

//-------------------------Exercise 4 : Shopping List----------------------------//
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["banana", "orange", "apple"];
function myBill(){
 let totalPrice = 0;
   for (const item of shoppingList) {
   if (item in stock && stock[item] > 0) {
      totalPrice += prices[item];
    } else {
      console.log(`mehsul "${item}" anbarda yoxdur`);
    }
}
return totalPrice;
}
const totalBill = myBill();
console.log(`Total bill: ${totalBill} manat`);

//---------------------Exercise 5 : What’s In My Wallet ?-------------------------------//
    function changeEnough(itemPrice, amountOfChange){
    const totalChange = (amountOfChange[0] * 0.25) + (amountOfChange[1] * 0.10) + (amountOfChange[2] * 0.05) + (amountOfChange[3] * 0.01);
    if (totalChange >=itemPrice){
        return true;
    }   else{
        return false;
    }
}
console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]))
console.log(changeEnough(0.75, [0, 0, 20, 5]))

//-----------------------Exercise 6 : Vacations Costs-------------------------//