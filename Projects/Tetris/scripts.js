document.addEventListener('DOMContentLoaded', () => {

const grid = document.querySelector('.grid')
let squares = Array.from(document.querySelectorAll('.grid div'))
const ScoreDisplay = document.querySelector('#score')
const StartBtn = document.querySelector('#start-button')
const width = 10
let timerId


// The Tetrominoes
 
const jTetromino = [
	[1, width+1, width*2+1, 2],
	[width, width+1, width+2, width*2+2],
	[1, width+1, width*2,width*2+1],
	[0, width, width+1, width+2]
]

const oTetromino = [
	[0,1,width,width+1]
]

const zTetromino = [
	[width, width+1, width*2+1, width*2+2],
	[1, width, width+1, width*2],
	[0,1,width+1,width+2],
	[2,width+1,width+2,width*2+1]
]

const sTetromino = [
	[width+1,width+2,width*2,width*2+1],
	[0,width,width+1,width*2+1],
	[1,2,width,width+1],
	[1,width+1,width+2,width*2+2]
]

const tTetromino = [
	[width,width+1,width+2,width*2+1],
	[1,width,width+1,width*2+1],
	[1,width,width+1,width+2],
	[1,width+1,width+2,width*2+1]
]

const lTetromino = [
	[2,width,width+1,width+2],
	[1,width+1,width*2+1,width*2+2],
	[width,width+1,width+2,width*2],
	[0,1,width+1,width*2+1]
]

const iTetromino = [
	[1,width+1,width*2+1,width*3+1],
	[width,width+1,width+2,width+3],
	[2,width+2,width*2+2,width*3+2],
	[width*2,width*2+1,width*2+2,width*2+3]
]

const theTetrominoes = [jTetromino, oTetromino, zTetromino, sTetromino, tTetromino, lTetromino, iTetromino]

let currentPosition = 4
let currentRotation = 0
//randomly select a tetromino and its first rotation
let random = Math.floor(Math.random()*theTetrominoes.length)
let current = theTetrominoes[random][currentRotation]

//draw the first rotation in  the first tertrimino
function draw() {
	current.forEach(index =>{
		squares[currentPosition + index].classList.add('tetromino')
	})
	
}

//Undraw Tetromino

function undraw(){
	current.forEach(index =>{
		squares[currentPosition + index].classList.remove('tetromino')
	})
}

// make the tetromino move down every second
timerId = setInterval(moveDown, 800)
// Downward movement function
function moveDown(){
	undraw()
	currentPosition += width
	draw()
	freeze()
}

 function freeze() {
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
      current.forEach(index => squares[currentPosition + index].classList.add('taken'))
      //start a new tetromino falling
      random = Math.floor(Math.random() * theTetrominoes.length)
      current = theTetrominoes[random][currentRotation]
      currentPosition = 4
      draw() 
    }
  }




})