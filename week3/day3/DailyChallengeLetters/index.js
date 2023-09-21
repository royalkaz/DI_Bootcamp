let letInpt = document.getElementById("letterInput")
console.log(letInpt)
letInpt.addEventListener("input", function(){
    let inptVal = this.value;
            let letOnly = inptVal.replace(/[^A-Za-z]/g, '');
            console.log(letOnly)
            if (inptVal !== letOnly) {
                this.value = letOnly;
            }
})

