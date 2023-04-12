// https://codesandbox.io/s/romantic-brook-0795ly?file=/src/index.js
import React, { useContext, useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'

const GRID_WIDTH = 40
const GRID_HEIGHT = 40
const INIT_SNAKE = [
  [20, 20],
  [21, 20],
  [22, 20],
  [23, 20],
  [24, 20]
]
const INIT_FOOD = [32, 20]
// let SNAKE = INIT_SNAKE
let SNAKE_LENGTH = 5
let DIRECTION = [1, 0] // right
// [-1, 0] // left
// [0, -1]  up
// [0, 1]  down

const Block = styled.div`
  width: 10px;
  height: 10px;
  border: solid 1px gray;
  background: ${(props) => (props.isSnake ? 'black' : props.isFood ? 'red' : 'white')};
`

const Row = styled.div`
  float: left;
  height: 10px;
`

const Grid = ({ snake, food }) => {
  let grid = []

  for (let i = 0; i < GRID_WIDTH; i++) {
    let row = []
    for (let j = 0; j < GRID_HEIGHT; j++) {
      row.push(
        <Block
          key={`${i}-${j}`}
          isSnake={snake?.find(([x, y]) => {
            return x === i && y === j
          })}
          isFood={food[0] === i && food[1] === j}
        />
      )
    }
    grid.push(<Row key={`row-${i}`}>{row}</Row>)
  }
  return grid
}

const getNextSnake = (snake = INIT_SNAKE, food) => {
  const currentPoint = snake[snake.length - 1]
  const nextPoint = [currentPoint[0] + DIRECTION[0], currentPoint[1] + DIRECTION[1]]
  let nextSnake = [...snake, nextPoint]
  if (nextSnake.length > SNAKE_LENGTH) {
    nextSnake = nextSnake.slice(nextSnake.length - SNAKE_LENGTH)
  }
  return nextSnake
}

const getFood = (snake) => {
  const x = Math.floor(Math.random() * (GRID_WIDTH - 1))
  const y = Math.floor(Math.random() * (GRID_HEIGHT - 1))
  if (snake.find((s) => s[0] === x && s[1] === y)) {
    // todo: add max try
    return getFood(snake)
  }
  return [x, y]
}

const App = (props) => {
  const [snake, setSnake] = useState(INIT_SNAKE)
  const [food, setFood] = useState(INIT_FOOD)
  const [isGameOver, setIsGameOver] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    let snakeSet = new Set(snake.map((s) => `${s[0]}-${s[1]}`))
    if (snakeSet.size < snake.length) {
      console.log('game over 1')
      setIsGameOver(true)
    }
    const snakeHead = snake[snake.length - 1]
    if (
      snakeHead[0] > GRID_WIDTH - 1 ||
      snakeHead[0] < 0 ||
      snakeHead[1] > GRID_HEIGHT - 1 ||
      snakeHead[1] < 0
    ) {
      console.log('game over 2')
      setIsGameOver(true)
    }
    console.log('snakeHead', snakeHead)

    timer.current = setTimeout(() => {
      nextStep()
    }, 300)
  }, [snake, isGameOver])

  const nextStep = () => {
    if (isGameOver) {
      clearTimeout(timer?.current)
      return
    }
    const n = getNextSnake(snake, food)
    const head = n[n.length - 1]
    if (head[0] === food[0] && head[1] === food[1]) {
      SNAKE_LENGTH++
      const newFood = getFood(snake)
      console.log('newFood', newFood)
      setFood(newFood)
    }
    setSnake(n)
  }

  if (isGameOver) {
    return (
      <>
        <button
          onClick={() => {
            clearTimeout(timer?.current)
            SNAKE_LENGTH = 5
            DIRECTION = [1, 0]
            setFood(INIT_FOOD)
            setSnake(INIT_SNAKE)
            setIsGameOver(false)
          }}
        >
          Reset
        </button>
      </>
    )
  }

  return (
    <>
      <button
        onClick={() => {
          nextStep()
        }}
      >
        nextPoint
      </button>
      <div>
        <button
          onClick={() => {
            DIRECTION = [0, -1]
          }}
        >
          UP
        </button>
        <button
          onClick={() => {
            DIRECTION = [0, 1]
          }}
        >
          DOWN
        </button>
        <button
          onClick={() => {
            DIRECTION = [-1, 0]
          }}
        >
          LEFT
        </button>
        <button
          onClick={() => {
            DIRECTION = [1, 0]
          }}
        >
          RIGHT
        </button>
      </div>
      <Grid snake={snake} food={food} />
    </>
  )
}

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <>
    <App />
  </>
)
