var sentence = ['not', 'bad'];
var wordNot = { not };
var wordBad = { bad };
var str = 'The movie is not that bad, I like it';
/* //If the word “bad” comes after the word “not”, you should 
  replace the whole “not…bad”  */
var sentence = ['not', 'bad'];
var wordNot = { not };
var wordBad = { bad };
var str = 'The movie is not that bad, I like it';
//If the word “bad” comes after the word “not”, you should replace the whole “not…bad”
//substring with “good”, then console.log the result.
var not = /not/i;
var wordNot = str.match(not);
var bad = /bad/i;
var wordBad = str.match(bad);
var result = str.replace('not that bad', 'good');
if  (console.log(result));
  else console.log(str);
//If the word “bad” does not come after “not” or the words are not in the sentence,
// console.log the original sentence.

let sentence = ` The movie is not that bad, I like it `;
console.log(sentence)



// !!! correct way !!!

// !!! version 1

// !!!  let sentence = 'The pizza is not that bad ,but i cannot eat it.';
// !!!  let wordNot = sentence.indexOf('not');
// !!!  let wordBad = sentence.indexOf('bad');
// !!!  let words = sentence.slice(wordNot, wordBad + 3);
// !!!  if (wordNot < wordBad) {
// !!!     console.log(sentence.replace(words, 'good'));
// !!!  } else console.log(sentence);


