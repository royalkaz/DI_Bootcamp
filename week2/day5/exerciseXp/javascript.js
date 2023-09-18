function playTheGame(){
   const playGame = confirm("sen oynamaga hazirsan?");
    if(!playGame){
        alert("mesele yoxdur dostum");
        return;
    }
    let userNumber;
    let computerNumber = Math.floor(Math.random()* 11); // https://www.w3schools.com/js/js_random.asp
    let attempts = 0;


    // !!! while true yazmaq yerine condition yazmaq daha duzgundur, infinite loop ehtimalinin qarsini alir
    while (true){
         
            alert("yazdigin reqem bu araliqda deyil. 0 dan 10 qeder olan bir nomre qeyd et. ")
        }
    }
    function compareNumbers(userNumber, computerNumber){
        if (userNumber === computerNumber){
            alert("qalib oldun");
        } else if (userNumber > computerNumber){
            alert("yazdigin nomre komuterin nomresinden boyukdur")
        }else{
            alert("yazdigin nomre komuterin nomresinden kicikdir ")
        }
    }
        while (attempts < 3) {
        compareNumbers(userNumber, computerNumber);
        attempts++;
        
        if (userNumber === computerNumber || attempts === 3){
            break;
        }
        userNumber = parseInt(prompt("0 dan 10 qeder bir yeni reqem qeyd et"));
    }
    if (attempts === 3) {
        alert("tessufler olsun tapa bilmedin duzgun nomre "+ computerNumber );
    }
   
   

