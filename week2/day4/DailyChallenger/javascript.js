const input = prompt(" sozler yaz ")
const words = input.split(" ")

// uzun sozu tapmaq

let maxLength = 0;
for(const word of words){
    console.log(word)
    if(word.length > maxLength){
        console.log(word)
        maxLength = word.length;
        console.log(maxLength)
    }
    console.log(word)
}

// sozleri ulduzlu duzbucaqda goster

const frameWidth = maxLength +4;
const rowline = " * ".padEnd(frameWidth, " * ");
console.log(rowline);
for (const word of words){
    const colword = word.padEnd(maxLength, " * ")
    console.log(` * ${colword} * `);
}
console.log(rowline);