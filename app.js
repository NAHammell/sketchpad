const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');
const slider = document.getElementById('slider');
const defaultColor = 'black';
const redBtn = document.getElementById('red');
const sliderLabel = document.getElementById('gridsize');

let canvasSize = 16;
let color = defaultColor;

slider.onchange = function () {
    canvasSize = this.value;
    container.innerHTML = '';
    generateSquares(canvasSize);
}

slider.onmousemove = function (e) {
    sliderLabel.textContent = `${e.target.value} x ${e.target.value}`;
}

function generateSquares(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < (size * size); i++) {
        let pixel = document.createElement('div');
        pixel.addEventListener('mouseover', function () {
            pixel.style.backgroundColor = `${color}`;
        });
        container.appendChild(pixel);
    }
}

function removeColor() {
    container.childNodes.forEach(pixel => pixel.style.backgroundColor = 'white');
}

clearBtn.addEventListener('click', removeColor);
let colorBtns = document.querySelectorAll('.colors');
function addColors(nodeList) {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener('click', function() {
            color = nodeList[i].id;
        });
    }
}

addColors(colorBtns);

generateSquares(canvasSize);