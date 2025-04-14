const grid = document.querySelector(".grid");
const setSquares = document.querySelector(".setSquares");
let numberPixels = setSquares.value;
const pixels = document.querySelector(".pixels")
const resetSketch = document.querySelector(".resetSketch");
const resetGrid = document.querySelector(".resetGrid");
const color = document.querySelector("#color");
const colorSelected = document.querySelector(".colorSelected");
const container = [];

createGrid(container, numberPixels, colorSelected);

setSquares.addEventListener("click", () => {
    cleanGrid(grid);
    createGrid(container, setSquares.value, colorSelected);
    pixels.textContent = `${setSquares.value} x ${setSquares.value}`;
})

resetSketch.addEventListener("click", () => {
    for (let element of container){
        element.style.background = "white";
    }
})

function createGrid(container, squares, colorSelected){
    let width = 500 / squares;
    for ( i = 0 ; i < (squares*squares) ; i++){
        container[i] = document.createElement("div");
        container[i].setAttribute("class", "square");
        container[i].style.cssText = `flex-basis: ${width}px;`;
        grid.appendChild(container[i]);
        container[i].addEventListener("mouseenter", (e) => {
            if (color.value == "random"){
                let red = Math.floor((Math.random()*255));
                let green = Math.floor((Math.random()*255));
                let blue = Math.floor((Math.random()*255));
                e.target.style.background = `rgb(${red}, ${green}, ${blue})`
            } else if (color.value == "selected"){
                e.target.style.background = colorSelected.value;
            } else if (color.value == "erase") {
                e.target.style.background = "white";
            }
        });
    }
}

function cleanGrid(grid){
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
      }
}