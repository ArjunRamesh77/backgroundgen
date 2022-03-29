var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.getElementsByTagName("h3")[0];
var body = document.getElementById("gradient");

displayGradientValue(body.style.background);

function displayGradientValue(value) {
    h3.textContent = value;
}

function updateBackground(color1, color2) {
    updateValue = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
    body.style.background = updateValue;
    displayGradientValue(updateValue);
}

color1.addEventListener("input", function(event) {
    updateBackground(color1.value, color2.value);  
});

color2.addEventListener("input", function(event) {
    updateBackground(color1.value, color2.value);
});