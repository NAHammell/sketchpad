const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');
const slider = document.getElementById('slider');

let canvasSize = 16;

slider.onchange = function () {
    canvasSize = this.value;
    container.innerHTML = '';
    generateSquares(canvasSize);
}

function generateSquares(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < (size * size); i++) {
        let pixel = document.createElement('div');
        pixel.style.transitionDuration = '0.25s';
        pixel.addEventListener('mouseover', function () {
            pixel.style.backgroundColor = 'black';
        });
        container.appendChild(pixel);
    }
}

function removeColor() {
    container.childNodes.forEach(pixel => pixel.style.backgroundColor = 'white');
}

clearBtn.addEventListener('click', removeColor);

generateSquares(canvasSize);