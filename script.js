

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