//Create 16x16 grid of divs with class box
let htmlElements = "";
for (let i = 0; i<256;i++){
    htmlElements+='<div class="box"></div>';
}
let container = document.getElementById("container");
container.innerHTML = htmlElements;

//Function for changing the color of div when hovering
function changeDefOver(e){
    e.target.style.backgroundColor = "pink";
}

//Select all divs having the class box
let test = document.getElementsByClassName('box');

//Loop over all divs in class box with the mouseover function
for (let i = 0; i < test.length ; i++){
    test[i].addEventListener('mouseover',changeDefOver)
}
