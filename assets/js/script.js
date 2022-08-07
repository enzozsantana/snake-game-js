let canvas = document.getElementById('snake')
let context = canvas.getContext('2d')
let box = 22
let snake = [
    {
        x: 8 * box,
        y: 8 * box
    }
]
let direction = 'right'
let food = {
    x: Math.floor(Math.random() * 21 + 1) * box,
    y: Math.floor(Math.random() * 21 + 1) * box
}

function createBG() {
    context.fillStyle = '#7BA553'
    context.fillRect(0, 0, 22 * box, 22 * box)
}

function createSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = '#272E1D'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function drawFood() {
    context.fillStyle = '#272E1D'
    context.fillRect(food.x, food.y, box, box)
}

document.addEventListener('keydown', update)

function update(event) {
    if(event.keyCode == 37 || event.keyCode == 65 && direction != 'right') direction = 'left'
    if(event.keyCode == 38 || event.keyCode == 87 && direction != 'down') direction = 'up'
    if(event.keyCode == 39 || event.keyCode == 68 && direction != 'left') direction = 'right'
    if(event.keyCode == 40 || event.keyCode == 83 && direction != 'up') direction = 'down'
}

function startGame() {
    if(snake[0].x > 22 * box && direction == 'right') snake[0].x = 0
    if(snake[0]. x < 0 && direction == 'left') snake[0].x = 22 * box
    if(snake[0]. y > 22 * box && direction == 'down') snake[0].y = 0
    if(snake[0]. y < 0 && direction == 'up') snake[0].y = 22 * box

    for(i = 1; i < snake.length; i++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game)
            gameOver = document.getElementById('display').innerHTML = 'Game Over'
        }
    }

    createBG()
    createSnake()
    drawFood()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if(direction == 'right') snakeX += box
    if(direction == 'left') snakeX -= box
    if(direction == 'up') snakeY -= box
    if(direction == 'down') snakeY += box

    if(snakeX != food.x || snakeY != food.y) {
        snake.pop()
    } 
    else {
        food.x = Math.floor(Math.random() * 21 + 1) * box,
        food.y = Math.floor(Math.random() * 21 + 1) * box

    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)
}

let game = setInterval(startGame, 180)
