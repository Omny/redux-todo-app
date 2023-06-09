import { createSlice, current } from "@reduxjs/toolkit";

const getInitialState = () => [
  { id: 1, content: 'Make homework', done: false },
  { id: 2, content: 'Write a post', done: false },
  { id: 3, content: 'Share a post', done: false },
  { id: 4, content: 'Look a the site', done: false },
];

const todoSlice = createSlice({
  name: 'todo',
  // тут добавим начальные данные
  initialState: getInitialState(),
  // action.payload это, то, что передаётся в функцию,
  // тут это строка с названием новой задачи в add или id для удаления или пометки выполнения
  reducers: {
    add(items, action) {
      const newItem = {
        id: 1 + Math.max(0, ...items.map((item) => item.id)),
        content: action.payload,
        done: false,
      };
      console.log(current(items));
      return [...items, newItem];
    },

    remove(items, action) {
      return items.filter((item) => item.id !== action.payload);
    },

    doneToggle(items, action) {
      const currentItem = items.find((item) => item.id === action.payload);

      if (currentItem) {
        currentItem.done = !currentItem.done;
      }
    },
  },
});

export const { add, remove, doneToggle } = todoSlice.actions

export default todoSlice.reducer;