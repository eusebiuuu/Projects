const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d'), circleSize = 10;
const curScore = document.createElement('div');
document.body.append(curScore);
curScore.style.position = 'absolute';
curScore.style.color = 'red';
curScore.style.fontSize = '1rem';
curScore.style.top = '30px';
curScore.style.right = '5px';
let score = 0;

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape {
    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}

class Ball extends Shape {

    constructor(x, y, velX, velY, color, size, exist) {
        super(x, y, velX, velY);
        this.color = color;
        this.size = size;
        this.exist = exist;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    collisionDetect() {
        for (const ball of balls) {
            if (!(this === ball) && ball.exist) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
        
                if (distance < this.size + ball.size) {
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }

    update() {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }
    
        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }
    
        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }
    
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }
    
        this.x += this.velX;
        this.y += this.velY;
    }
};

class EvilCircle extends Shape {

    constructor(x, y) {
        super(x, y, 20, 20);
        window.addEventListener('keydown', (e) => {
            if (e.key === 'w') {
                if (this.y - circleSize < this.velY) return;
                this.y -= this.velY;
            } else if (e.key === 'a') {
                if (this.x - circleSize < this.velX) return;
                this.x -= this.velX;
            } else if (e.key === 's') {
                if (height < this.y + circleSize + this.velY) return;
                this.y += this.velY;
            } else if (e.key === 'd') {
                if (width < this.x + circleSize + this.velX) return;
                this.x += this.velX;
            }
        });
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.arc(this.x, this.y, circleSize, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.arc(this.x, this.y, circleSize - 3, 0, 2 * Math.PI);
        ctx.fill();
    }

    collisionDetect() {
        for (const ball of balls) {
            if (ball.exist) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
        
                if (distance < circleSize + ball.size) {
                    ball.exist = false;
                    score--;
                }
            }
        }
    }

    
}

const blackHole = new EvilCircle(random(circleSize, width - circleSize), random(circleSize, height - circleSize));
const balls = [];

while (balls.length < 25) {
    const size = random(10, 20);
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomRGB(),
        size, true
    );
    score++;
    balls.push(ball);
}

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
 
    for (const ball of balls) {
        if (ball.exist === false) continue;
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }
    blackHole.draw();
    blackHole.collisionDetect();
    const aux = document.querySelector('div');
    aux.textContent = `Ball count: ${score}`;

    requestAnimationFrame(loop);
}

loop();