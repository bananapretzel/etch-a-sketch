'use strict';

const container = document.getElementById("container");
let squareRoot = 16;
let perfectSquare = 256;
let squareInPercent = 100/squareRoot;
const pixelLength = parseInt(window.getComputedStyle(container).width);
const dropDownBox = document.getElementById("selectedSquare");
let squareSideLengthInPx = pixelLength/squareRoot;
const selectedSquare = document.getElementById("selectedSquare");
const colourChoice = document.getElementById("colour");
let isColourful = false;

function populateSelectField() {
    for (let i = 2; i <= 100; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        dropDownBox.appendChild(option);

    }
}

function createSquares(numSquares, colourful) {
    for (let i = 0; i < numSquares; i++) {
        const div = document.createElement("div");

        div.style.width = div.style.heigh = `${squareInPercent}%`;
        div.style.backgroundColor = "black";

        div.addEventListener("mouseover", () => {
            if (colourful) {
                div.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
            } else {
                div.style.backgroundColor = "floralwhite";
            }
        })
        container.appendChild(div);
    }
    dropDownBox.selectedIndex = squareRoot-2;
}


function destroySquares() {
 while (container.firstElementChild) {
    container.removeChild(container.firstElementChild);
 }
}


selectedSquare.addEventListener("change", function () {
    squareRoot = this.value;
    perfectSquare = squareRoot ** 2;
    squareSideLengthInPx = pixelLength/squareRoot;
    squareInPercent = 100/squareRoot;
    destroySquares();
    createSquares(perfectSquare, isColourful);
});

colourChoice.addEventListener("change", function() {
    if (this.value === "colour") {
        destroySquares();
        isColourful = true;
        createSquares(perfectSquare, isColourful);
    } else if (this.value === "mono") {
        destroySquares();
        isColourful = false;
        createSquares(perfectSquare, isColourful);
    }
}

)



populateSelectField();
createSquares(perfectSquare, isColourful);
colourChoice.selectedIndex = 0;