import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todo';

// Создаётся store (хранилище), там редюсер из todo, 
// всё это прокинется через провайдер
const store = configureStore({
  reducer: {
    // todo – это свойство будет внутри объекта общего состояния: state.todo
    // извлечётся через useSelector((state) => state.todo) в App
    // с начальными данными из store/todo
    todo: todoReducer 
  }
});

export default store;