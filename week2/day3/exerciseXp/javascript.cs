const people = ["Greg", "Mary", "Devon", "James"];
// "Greg" Silmek
const gregUser = people.indexOf("Greg");
if (gregUser !== -1) {
  people.splice(gregUser, 1);
}

//  "James" deyis  "Jason"
const jamesUser = people.indexOf("James");
if (jamesUser !== -1) {
  people[jamesUser] = "Jason";
}

// adimi elave et
const yourName = "Royal";
people.push("Royal");

// mary user nomresini goster
const maryUser = people.indexOf("Mary");
console.log(`Mary's index is: ${maryUser}`);

// mery ve royal olmadan masivi goster
const peopleCopy = people.slice(1, -1); 

// foo userini axtar
const fooUser = people.indexOf("Foo");
console.log(`Index of 'Foo': ${fooUser}`);

// last  yarat ve masivin sonuna elave et
const last = people[people.length - 1];

// 2 ci hisse

// console log goster her bir user ucun
for (const person of people) {
  console.log(person);
}

// userler masivinden cixin
for (const person of people) {
  console.log(person);
  if (person === "Devon") {
    break;
  }
}
