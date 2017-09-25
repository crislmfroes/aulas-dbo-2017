const pre = document.querySelector('pre');
const quadrado = document.querySelector('div#quadrado');
quadrado.style.left = '0px';
quadrado.style.top = '0px';
const player = Player(quadrado, 10, 10);
document.addEventListener('keydown', onkeydown);
document.addEventListener('keyup', onkeyup);

let keys = [];

function onkeydown(event) {
    console.log(event.key);
    if (keys.indexOf(event.key) >= 0) return;
    keys.push(event.key);
}

function onkeyup(event) {
    keys.splice(event.key, 1);
}

function loop() {
    if (keys.indexOf('a') >= 0) {
        console.log('left');
        player.moveLeft();
    } else if (keys.indexOf('d') >= 0) {
        player.moveRight();
    }
    if (keys.indexOf('w') >= 0) {
        player.moveUp();
    } else if (keys.indexOf('s') >= 0) {
        player.moveDown();
    }
    setTimeout(loop, 1000 / 30);
}

loop();

/* function onkeydown(event) {
    if (event.key === 'ArrowLeft') {
        player.moveLeft();
    } else if (event.key === 'ArrowRight') {
        player.moveRight();
    }
    if (event.key === 'ArrowUp') {
        player.moveUp();
    } else if (event.key === 'ArrowDown') {
        player.moveDown();
    }
}  */
/* 
function onkeyup(event) {
    
} */