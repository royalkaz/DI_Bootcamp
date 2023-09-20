function helloWorld() {
    alert("Hello World");
  }
  setTimeout(helloWorld, 2000);

  function addpar(){
    let par = document.createElement("p");
    par.textContent = "Hello World"
    let container = document.getElementById("container");
    container.appendChild(par);
  }
  setTimeout(addpar, 2000);
  console.log(addpar)

  function addpar2(){
    let par2 = document.createElement("p");
    par2.textContent = "Hello World2"
    let container = document.getElementById("container");
    container.appendChild(par2);
  }
  let setid = setInterval(addpar2, 2000);
  let clearButton = document.getElementById("clear");
  clear.addEventListener("click", function() {
      clearInterval(setid);
  }
  )
  let intId = setInterval(addPar3, 1000); 
  let container = document.getElementById("container");
  let parCnt = 0;

  function addPar3() {
  if (parCnt < 5) {
                  const par3 = document.createElement("p");
                  par3.textContent = "hello World3";
                  container.appendChild(par3);
                  parCnt++;

                  if (parCnt === 5) {
                  clearInterval(intId); 
                                    }
                  }
                    }
        
  
  
 
