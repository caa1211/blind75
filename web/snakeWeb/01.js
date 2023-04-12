const GRID_W = 40
const GRID_H = 40
const INIT_SNAKE = [
  [16, 20],
  [17, 20],
  [18, 20],
  [19, 20],
  [20, 20]
]
const gridContainer = document.createElement('div')

const drawGrid = () => {
  for (let i = 0; i < GRID_W; i++) {
    const gridRow = document.createElement('div')
    gridRow.classList.add('grid-row')
    for (let j = 0; j < GRID_H; j++) {
      const block = document.createElement('div')
      block.setAttribute('id', `block-${j}-${i}`)
      block.classList.add('grid-block')
      gridRow.appendChild(block)
    }
    gridContainer.appendChild(gridRow)
  }

  document.body.appendChild(gridContainer)
}

drawGrid()

const drawSnake = (snake = INIT_SNAKE) => {
  document.querySelectorAll('.snake-body').forEach((element) => {
    element.classList.remove('snake-body')
  })
  snake.forEach((s) => {
    const p = document.querySelector(`#block-${s[0]}-${s[1]}`)
    p?.classList?.add('snake-body')
  })
}

const getNextSnake = (snake, direction, maxSnakeLength) => {
  const snakeHead = snake[snake.length - 1]
  const newSnakeHead = [snakeHead[0] + direction[0], snakeHead[1] + direction[1]]
  let newSnake = [...snake, newSnakeHead]
  if (newSnake.length > maxSnakeLength) {
    newSnake = newSnake.slice(newSnake.length - maxSnakeLength)
  }
  return newSnake
}

const drawApple = (applePos) => {
  document.querySelector('.snake-apple')?.classList?.remove('snake-apple')
  const p = document.querySelector(`#block-${applePos[0]}-${applePos[1]}`)
  p?.classList?.add('snake-apple')
}

const getSnakeHead = (snake) => snake[snake.length - 1]

const start = () => {
  let snake = [...INIT_SNAKE]
  let direction = [1, 0] // go right
  let maxSnakeLength = snake.length
  let applePos = [30, 20]
  drawSnake(snake)
  drawApple(applePos)

  const getApplePos = () => {
    return [Math.floor(Math.random() * GRID_W - 1), Math.floor(Math.random() * GRID_H - 1)]
  }

  const validation = (snake) => {
    const shankH = snake[snake.length - 1]

    if (shankH[0] < 0 || shankH[0] > GRID_W - 1 || shankH[1] < 0 || shankH[1] > GRID_H -1) {
      return false
    }
    const snakeSet = new Set(snake.map((s) => `${s[0]}-${s[1]}`))
    if (snakeSet.size !== snake.length) {
      return false
    }
    return true
  }

  const drawNextSnake = () => {
    const nextSnake = getNextSnake(snake, direction, maxSnakeLength)
    const head = getSnakeHead(nextSnake)
    if (head[0] === applePos[0] && head[1] === applePos[1]) {
      maxSnakeLength++
      applePos = getApplePos()
      drawApple(applePos)
    }
    snake = nextSnake
    const isValidSnake = validation(snake)
    isValidSnake ? drawSnake(snake) : (document.body.innerText = 'GAME OVER')
  }

  const next = document.querySelector('#next')
  next.innerHTML = 'next'
  next.addEventListener('click', drawNextSnake)

  const up = document.querySelector('#up')
  up.innerHTML = 'up'
  up.addEventListener('click', (e) => {
    direction = [0, -1]
  })
  const down = document.querySelector('#down')
  down.innerHTML = 'down'
  down.addEventListener('click', (e) => {
    direction = [0, 1]
  })

  const left = document.querySelector('#left')
  left.innerHTML = 'left'
  left.addEventListener('click', (e) => {
    direction = [-1, 0]
  })

  const right = document.querySelector('#right')
  right.innerHTML = 'right'
  right.addEventListener('click', (e) => {
    direction = [1, 0]
  })

  setInterval(() => {
    drawNextSnake()
  }, 300)
}

start()
