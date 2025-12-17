import { configureStore } from "@reduxjs/toolkit";
import snakeReducer from "./reducers/snakeSlice";

const store = configureStore({
  reducer: {
    snake: snakeReducer,
  },
});

export default store;
