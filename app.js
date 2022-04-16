const container = document.getElementById('container');
const clearBtn = document.getElementById('clear');

function generateSquares() {
    for (i = 256; i > 0; i--) {
        let div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
        div.addEventListener('mouseover', function (e) {
            div.style.backgroundColor = 'black';
        });
    }
}

function removeColor() {
    let pixels = document.querySelectorAll('.box');
    pixels.forEach(pixel => pixel.style.backgroundColor = 'white');
}

clearBtn.addEventListener('click', removeColor);

generateSquares();