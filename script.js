'use strict';

const container = document.getElementById("container");
let squareRoot = 16;
let perfectSquare = 256;
let squareInPercent = 100 / squareRoot;
const pixelLength = parseInt(window.getComputedStyle(container).width);
const dropDownBox = document.getElementById("selectedSquare");
let squareSideLengthInPx = pixelLength / squareRoot;
const selectedSquare = document.getElementById("selectedSquare");
const colourChoice = document.getElementById("colour");
const tintChoice = document.getElementById("tint");
const resetButton = document.getElementById("reset");
let isColourful = false;
let useTint = false;

function populateSelectField() {
    for (let i = 2; i <= 100; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        dropDownBox.appendChild(option);

    }
}

function createSquares(numSquares, colourful, useTint) {
    for (let i = 0; i < numSquares; i++) {
        const div = document.createElement("div");
        let hoveredBefore = false;
        div.style.width = div.style.heigh = `${squareInPercent}%`;
        div.style.backgroundColor = "black";
        div.style.opacity = 1;

        div.addEventListener("mouseenter", () => {
            if (colourful && hoveredBefore === false) {
                div.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
            } else if (!colourful && hoveredBefore === false) {
                div.style.backgroundColor = "floralwhite";
            }

            if (useTint && hoveredBefore === true) {
                div.style.opacity = div.style.opacity - 0.1;
            }
            hoveredBefore = true;
        });
        container.appendChild(div);
    }
    dropDownBox.selectedIndex = squareRoot - 2;
}


function destroySquares() {
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    }
}


selectedSquare.addEventListener("change", function () {
    squareRoot = this.value;
    perfectSquare = squareRoot ** 2;
    squareSideLengthInPx = pixelLength / squareRoot;
    squareInPercent = 100 / squareRoot;
    destroySquares();
    createSquares(perfectSquare, isColourful, useTint);
});

colourChoice.addEventListener("change", function () {
    if (this.value === "colour") {
        destroySquares();
        isColourful = true;
        createSquares(perfectSquare, isColourful, useTint);
    } else if (this.value === "mono") {
        destroySquares();
        isColourful = false;
        createSquares(perfectSquare, isColourful, useTint);
    }
});

tintChoice.addEventListener("change", function () {
    destroySquares();
    useTint = this.value === "yes" ? true : false;
    createSquares(perfectSquare, isColourful, useTint);

});

resetButton.addEventListener("click", function () {
    destroySquares();
    createSquares(perfectSquare, isColourful, useTint);
})

populateSelectField();
createSquares(perfectSquare, isColourful, useTint);
colourChoice.selectedIndex = 0;
tintChoice.selectedIndex = 0;