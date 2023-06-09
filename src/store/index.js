import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todo';

// Создаётся store (хранилище), там редюсер из todo, 
// всё это прокинется через провайдер
const store = configureStore({
  reducer: {
    todo: todoReducer 
  }
});

export default store;