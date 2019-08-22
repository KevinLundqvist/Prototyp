let button = document.getElementById("button1");
let button2 = document.getElementById("button2");
let text = document.getElementById("demo");
button.addEventListener('click', onButtonClicked);
button2.addEventListener('click', onButton2Clicked);

function onButtonClicked() {
    document.getElementById("demo").innerHTML = "Button 1 was clicked!";
}

function onButton2Clicked() {
    document.getElementById("demo").innerHTML = "Button 2 was clicked!";

}