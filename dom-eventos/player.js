function Player(div, vx, vy) {
    console.log(div.style);
    return {
        'div': div,
        'x': parseInt(div.style.left),
        'y': parseInt(div.style.top),
        'vx': vx,
        'vy': vy,
        'moveLeft': function () {
            this.x -= this.vx;
            this.div.style.left = this.x + 'px';
        },
        'moveRight': function () {
            this.x += this.vx;
            this.div.style.left = this.x + 'px';
        },
        'moveUp': function () {
            this.y -= this.vy;
            this.div.style.top = this.y + 'px';
        },
        'moveDown': function () {
            this.y += this.vy;
            this.div.style.top = this.y + 'px';
        }
    };
}