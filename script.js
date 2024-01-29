document.addEventListener("DOMContentLoaded", function() {
    var redAmbilight = document.getElementById("red-ambilight");
    var purpleAmbilight = document.getElementById("purple-ambilight");

    function randomMovement() {
        var x = Math.random() * 100;
        var y = Math.random() * 100;

        redAmbilight.style.left = x + "%";
        redAmbilight.style.top = y + "%";

        purpleAmbilight.style.left = 100 - x + "%";
        purpleAmbilight.style.top = 100 - y + "%";
    }

    function moveAmbilight() {
        randomMovement();
    }
    
    randomMovement();
    setInterval(moveAmbilight, 10000);
});