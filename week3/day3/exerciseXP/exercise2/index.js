var pos = 0; 
// !!! variable globalda olmalidir

function myMove() {
  let redDiv = document.getElementById('animate');

  var id = setInterval(frame, 5);

  function frame() {
    if (pos == 350) {
      clearInterval(id);
      pos = 0;
    //   !!! interval clear olduqdan sonra yeniden positionu sifirlamaq lazimdir
    } else {
      pos++;
      redDiv.style.left = pos + 'px';
    }
  }
}

