

const Gamecanvas = document.getElementById("Gamecanvas");

const ctx = Gamecanvas.getContext('2d');


ctx.fillStyle = 'white';
ctx.strokeStyle = 'black';


ctx.fillRect(0, 0, Gamecanvas.width, Gamecanvas.height);
ctx.strokeRect(0, 0, Gamecanvas.width, Gamecanvas.height);



let snake = [
    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 },
]

snake.forEach(snakepart => {


    ctx.fillStyle = 'lightgreen';
    ctx.strokeStyle = 'black';



    ctx.fillRect(snakepart.x, snakepart.y, 10, 10);
    ctx.strokeRect(snakepart.x, snakepart.y, 10, 10)
})

let foodx;
let foody;
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

createfood();

ctx.fillStyle = 'red';
ctx.strokeStyle = 'darkred'



ctx.fillRect(foodx, foody, 10, 10);
ctx.strokeRect(foodx, foody, 10, 10)