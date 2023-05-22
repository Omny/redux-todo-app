import { createSlice, configureStore } from "@reduxjs/toolkit";

const getInitialState = () => [
  { id: 1, content: 'Make homework', done: false },
  { id: 2, content: 'Write a post', done: false },
  { id: 3, content: 'Share a post', done: false },
  { id: 4, content: 'Look a the site', done: false },
];

const todoSlice = createSlice({
  name: 'todo',
  initialState: getInitialState(),
  reducers: {
    add(items, action) {
      const item = {
        id: 1 + Math.max(0, ...items.map((item) => item.id)),
        content: action.payload,
        done: false,
      };

      return [...items, item];
    },

    remove(items, action) {
      return items.filter((item) => item.id !== action.payload);
    },

    doneToggle(items, action) {
      const item = items.find((item) => item.id === action.payload)

      if (item) {
        item.done = !item.done;
      }
    }
  }
});

export const { add, remove, doneToggle } = todoSlice.actions

export default todoSlice.reducer;