function myMove() {
    let redDiv = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            redDiv.style.left = pos + "px";
        }
    }
}
