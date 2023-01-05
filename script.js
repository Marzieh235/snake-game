

const Gamecanvas = document.getElementById("Gamecanvas");

const ctx = Gamecanvas.getContext('2d');
let ChangingDirection = false;

document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    if (ChangingDirection) return;
    ChangingDirection = true;

    const keyPressed = event.keyCode;
    if (keyPressed == LEFT_KEY && dx != 10) {
        dx = -10;
        dy = 0;
    }

    if (keyPressed == RIGHT_KEY && dx != 10) {
        dx = 10;
        dy = 0;
    }

    if (keyPressed == UP_KEY && dy != 10) {
        dx = 0;
        dy = -10;
    }

    if (keyPressed == DOWN_KEY && dy != 10) {
        dx = 0;
        dy = 10;
    }
}


let snake = [
    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 },
]

let foodx;
let foody;
let dx = 10;
let dy = 0;


function main() {
    setTimeout(() => {
        ChangingDirection = false;
        clearCanvas();
        drawFood();
        advanceSnake();
        DrawSnake();

        main();
    }, 100)
}

let clearCanvas = () => {

    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';

    ctx.fillRect(0, 0, Gamecanvas.width, Gamecanvas.height);
    ctx.strokeRect(0, 0, Gamecanvas.width, Gamecanvas.height);
}

let randomNumber = (max, min) => Math.round((Math.random() * (max - min) + min) / 10) * 10

let createfood = () => {
    foodx = randomNumber(0, Gamecanvas.width - 10);
    foody = randomNumber(0, Gamecanvas.height - 10);
    snake.forEach(snakepart => {
        if (snakepart.x === foodx && snakepart.y === foody) {
            createfood();
        }
    })
}

let advanceSnake = () => {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy }

    snake.unshift(head);
    snake.pop();
}

let DrawSnake = () => snake.forEach(DrawSnakePart);
let DrawSnakePart = snakepart => {

    ctx.fillStyle = 'lightgreen';
    ctx.strokeStyle = 'black';

    ctx.fillRect(snakepart.x, snakepart.y, 10, 10);
    ctx.strokeRect(snakepart.x, snakepart.y, 10, 10)

}

let drawFood = () => {

    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'darkred'

    ctx.fillRect(foodx, foody, 10, 10);
    ctx.strokeRect(foodx, foody, 10, 10);

}

createfood();
main();



