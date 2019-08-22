let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

button.addEventListener('click', OnButtonClicked);
button2.addEventListener('click', OnButton2Clicked);
button3.addEventListener('click', OnButton3Clicked);

function OnButtonClicked() {
    alert("You clicked the Red button");
    document.body.style.backgroundColor = "Red";
};

function OnButton2Clicked() {
    alert("You clicked the Red button");
    document.body.style.backgroundColor = "Green";
};

function OnButton3Clicked() {
    alert("You clicked the Blue button");
    document.body.style.backgroundColor = "Blue";
};