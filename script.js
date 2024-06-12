'use strict';

const container = document.getElementById("container");
let squareRoot = 16;
let perfectSquare = 256;

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
        //console.log(`${pixelLength/squareRoot}`);
        div.style.width = `${squareSideLengthInPx}px`;
        div.style.padding = 0;
        div.style.height = `${squareSideLengthInPx}px`;
        div.style.margin = 0;
        div.style.border = 0;
        div.style.backgroundColor = "blue";
        div.style.outline = "1px solid black";
        //div.textContent = `${i + 1}`;

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red";
        })
        //console.log(div.style.width);
        //console.log(div.style.height);
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

    
    console.log("perfectSquare = " + perfectSquare);
    console.log("square root = " + squareRoot);

    destroySquares();
    createSquares();

})

populateSelectField();
createSquares();