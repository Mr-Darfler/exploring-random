let lines = [];
let offset = 0;

function setup() {
    createCanvas(600, 400);
    background(255);
    lines.push(new Line(randomGaussian(width / 2), randomGaussian(height / 2)));
}

function draw() {
    let r = random();
    offset += 0.05;
    background(75 / noise(offset) + 1, 75 / noise(offset) + 1, 150 / noise(offset) + 1, 50);
    if ((r > 0.99) && (lines.length < 20)) {
        lines.push(new Line(randomGaussian(width / 2, 50), randomGaussian(height / 2, 50), red, green, blue));
    }
    for (let i = 0; i < lines.length; i++) {
        lines[i].show();
    }
}

class Line {
    constructor(x2, y2) {
        this.x2 = x2;
        this.y2 = y2;
    }
    show() {
        stroke(0);
        strokeWeight(0.5);
        this.x2 += 3 * sin(offset);
        this.y2 += 3 * cos(offset);
        line(this.x2, this.y2, (mouseX + offset), (mouseY - offset));
    }

}
