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
if (console.log(result));
else console.log(str);
//If the word “bad” does not come after “not” or the words are not in the sentence,
// console.log the original sentence.

// !!!step 1 sentence variable yarat icerisindeki cumle icerisinde not ve bad sozleri yer alsin
// !!!step 2 not sozu gelene kimi alan hisseni ve bad sozunden sonraki gelen hisseni slice() metodundan istifade ederek ayir
// !!!step 3 not ve bad sozlerinin indexini tap search() metodundan istifade ederek
// !!!step 4 not ve bad sozlerinin indexlerini muqayise et
// !!!step 5 bad soxunun idexi boyuk olarsa not ve bad sozleirnin yerine good yaz splice() metodundan istifade edib
