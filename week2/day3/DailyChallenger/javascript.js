/* dailyChallenger */
const size = 5; 
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}
/* dailyChallengergold */
const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
const numbersToString = numbers.toString();
console.log(numbersToString);
const joinedWithPlus = numbers.join("+");
const joinedWithSpace = numbers.join(" ");
const joinedWithEmpty = numbers.join("");
console.log(joinedWithPlus);
console.log(joinedWithSpace);
console.log(joinedWithEmpty);