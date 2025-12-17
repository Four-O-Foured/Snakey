import { createSlice } from "@reduxjs/toolkit";

const generateFood = (rows, cols, snake) => {
  if (rows === 0 || cols === 0) return { x: 5, y: 5 }; // Default fallback
  let newFood;
  let isOnSnake;
  do {
    newFood = {
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows),
    };
    isOnSnake = snake.some(
      (segment) => segment.x === newFood.x && segment.y === newFood.y
    );
  } while (isOnSnake);
  return newFood;
};

const initialState = {
  snake: [
    { x: 5, y: 6 },
    { x: 5, y: 7 },
    { x: 5, y: 8 },
  ],
  direction: { x: 0, y: -1 },
  food: { x: 10, y: 10 },
  score: 0,
  highScore: parseInt(localStorage.getItem("snakeHighScore")) || 0,
  timer: 180, 
  status: "Starting",
  gridSize: { rows: 20, cols: 20 },
};

const snakeSlice = createSlice({
  name: "snake",
  initialState,
  reducers: {
    setGridSize: (state, action) => {
      state.gridSize = action.payload;
    },
    setDirection: (state, action) => {
      if (state.status !== "playing") return;

      const { x, y } = action.payload;

      if (state.direction.x + x === 0 && state.direction.y + y === 0) return;
      state.direction = action.payload;
    },
    tickTimer: (state) => {
      if (state.status !== "playing") return;
      if (state.timer > 0) {
        state.timer -= 1;
      } else {
        state.status = "game_over";
      }
    },
    updateHighScore: (state) => {
      if (state.score > state.highScore) {
        state.highScore = state.score;
        localStorage.setItem("snakeHighScore", state.highScore);
      }
    },
    moveSnake: (state) => {
      if (state.status !== "playing") return;

      const head = state.snake[0];
      const newHead = {
        x: head.x + state.direction.x,
        y: head.y + state.direction.y,
      };

      // Wall Collision
      if (
        newHead.x < 0 ||
        newHead.x >= state.gridSize.cols ||
        newHead.y < 0 ||
        newHead.y >= state.gridSize.rows
      ) {
        state.status = "game_over";
        return;
      }

      // Self Collision
      if (
        state.snake.some(
          (segment) => segment.x === newHead.x && segment.y === newHead.y
        )
      ) {
        state.status = "game_over";
        return;
      }

      state.snake.unshift(newHead);

      // Food Eaten
      if (newHead.x === state.food.x && newHead.y === state.food.y) {
        state.score += 10;
        state.food = generateFood(
          state.gridSize.rows,
          state.gridSize.cols,
          state.snake
        );
        
        if (state.score > state.highScore) {
          state.highScore = state.score;
          localStorage.setItem("snakeHighScore", state.highScore);
        }
      } else {
        state.snake.pop();
      }
    },
    restartGame: (state) => {
      state.snake = [
        { x: 5, y: 6 },
        { x: 5, y: 7 },
        { x: 5, y: 8 },
      ];
      state.direction = { x: 0, y: -1 };
      state.status = "playing";
      state.score = 0;
      state.highScore = parseInt(localStorage.getItem("snakeHighScore")) || 0;
      state.timer = 180;

      state.food = generateFood(
        state.gridSize.rows,
        state.gridSize.cols,
        state.snake
      );
    },
  },
});

export const {
  moveSnake,
  setDirection,
  setGridSize,
  restartGame,
  tickTimer,
  updateHighScore,
} = snakeSlice.actions;
export default snakeSlice.reducer;
