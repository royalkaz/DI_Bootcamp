//Using a DOM property, retrieve the h1 and console.log it.
let h1log = document.querySelector("h1");
console.log(h1log);
console.log(h1log.textContent);

//Using DOM methods, remove the last paragraph in the <article> tag.

let allParagraph = document.querySelectorAll("p"); 
console.log(allParagraph);
let lastParagraph = allParagraph[3];
lastParagraph.remove();

// !!! last child elemnt den de istifade etmek olar

//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

let h2bckchange = document.querySelector("h2")
console.log(h2bckchange)
 h2bckchange.addEventListener("mouseover", function(){
    h2bckchange.style.color = "red"
 })
 h2bckchange.addEventListener("mouseout", function(){
    h2bckchange.style.color = "black"
 })
//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

let h3hide = document.querySelector("h3")
console.log(h3hide)
h3hide.addEventListener("click", function(){
    h3hide.style.display = "None"
})

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

let boldButton = document.getElementById("bold-button")
let allParagraphBold = document.querySelectorAll("p");
console.log(allParagraph.textContent)
boldButton.addEventListener("click", function(){
   for ( let paragraph of allParagraphBold){
    paragraph.style.fontWeight = "bold"
    paragraph.style.color = "blue"
   }  
})

//BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

let h1SizeChange = document.querySelector("h1")
h1SizeChange.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random() * 100)
    h1SizeChange.style.fontSize = randomNumber
    
    // !!! fonst size kimi propertyler istifade etdikde yanina px de yazmaq lazimdir
})

//BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

let paragraphFade = document.querySelectorAll("p");
paragraphFade.addEventListener("mouseenter", function(){
    paragraphFade.classlist.add('fade')
}

)
