

const Gamecanvas = document.getElementById("Gamecanvas");

const ctx = Gamecanvas.getContext('2d');



let snake = [
    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 },
]

let foodx;
let foody;

function main() {
    setTimeout(() => {
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
    const head = { x: snake[0].x + 0, y: snake[0].y - 10 }

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



