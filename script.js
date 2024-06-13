'use strict';

const container = document.getElementById("container");
let squareRoot = 16;
let perfectSquare = 256;
let squareInPercent = 100/squareRoot;

const pixelLength = parseInt(window.getComputedStyle(container).width);
const dropDownBox = document.getElementById("selectedSquare");
let squareSideLengthInPx = pixelLength/squareRoot;

function populateSelectField() {
    for (let i = 2; i <= 100; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        dropDownBox.appendChild(option);

    }
}

function createSquares() {
    for (let i = 0; i < perfectSquare; i++) {
        const div = document.createElement("div");

        div.style.width = div.style.heigh = `${squareInPercent}%`;
        div.style.backgroundColor = "black";

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "floralwhite";
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

let selectedSquare = document.getElementById("selectedSquare");
selectedSquare.addEventListener("change", function () {
    squareRoot = this.value;
    perfectSquare = squareRoot ** 2;
    squareSideLengthInPx = pixelLength/squareRoot;
    squareInPercent = 100/squareRoot;
    destroySquares();
    createSquares();

})

populateSelectField();
createSquares();