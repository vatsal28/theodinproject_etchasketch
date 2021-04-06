//Create 16x16 grid of divs with class box
function myFunction(){
   let inputdiv = prompt("Enter the grid size","16");
    console.log(inputdiv);
    let gridsize = Number(inputdiv)*Number(inputdiv);
let htmlElements = "";
for (let i = 0; i<gridsize;i++){
    htmlElements+='<div class="box"></div>';
}
let container = document.getElementById("container");
container.innerHTML = htmlElements;
container.style.setProperty('--repeatcolumns',Number(inputdiv));
container.style.setProperty('--maxvalue',Number(inputdiv)*20);

//Function for changing the color of div when hovering
function changeDefOver(e){
    e.target.style.backgroundColor = "#"+ Math.floor(Math.random()*16777215).toString(16);
}

//Select all divs having the class box
let test = document.getElementsByClassName('box');

//Loop over all divs in class box with the mouseover function
for (let i = 0; i < test.length ; i++){
    test[i].addEventListener('mouseover',changeDefOver)
}


}


