let qPixels = document.getElementById('pixel-board');

for (let i = 1; i <= 25; i += 1){
    let criarQuadro = document.createElement('div');
    criarQuadro.className = 'pixel'
    qPixels.appendChild(criarQuadro);
}

window.onload = function () {
    let colorBlack = document.querySelector('#black')
    colorBlack.classList.add('selected');
}

let clickColor = document.querySelectorAll('.color');


for (let i = 0; i < clickColor.length; i +=1){
    clickColor[i].addEventListener('click', getColor)
};

function getColor (evento){
    let corSelecionada = document.querySelector('.selected');
    corSelecionada.classList.remove('selected');
    evento.target.classList.add('selected');    
}

let selected = 'black';
for (let i of clickColor){
    i.addEventListener('click', function(param){
        selected = param.target.id;
    })
}
let pixel = document.querySelectorAll('.pixel');
for (let i of pixel){
    i.addEventListener('click', function(pixelColor){
        pixelColor.target.style.backgroundColor = selected;
    })
};




