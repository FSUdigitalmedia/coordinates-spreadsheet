class Orb {
    constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.color = c;
    }

    draw() {
        fill(this.color)
        circle(this.x,this.y,30)
    }
}