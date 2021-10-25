let qPixels = document.getElementById('pixel-board');

for (let i = 1; i <= 25; i += 1){
    let criarQuadro = document.createElement('div');
    criarQuadro.className = 'pixel'
    qPixels.appendChild(criarQuadro);
}

window.onload = function () {
    let colorBlack = document.querySelector('#black')
    colorBlack.className = 'color selected';
}