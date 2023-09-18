const input = prompt(" sozler yaz ")
const words = input.split(" ")

// uzun sozu tapmaq

let maxLength = 0;
for(const word of words){
    if(word.length > maxLength){
        maxLength = word.length;
    }
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

//!!! setrler eyni olcude olmalidir bunu etmek ucun space-bosluqlardan istifade et repeat methodunu arasdira bilersen

