import { ADD, REMOVE, DONE_TOGGLE } from "./types";

export function reducer (items, action) {
  if (action.type === ADD) {
    const item = {
      id: 1 + Math.max(0, ...items.map((item) => item.id)),
      content: action.payload,
      done: false,
    };

    return [...items, item];
  }

  if (action.type === REMOVE) {
    return items.filter((item) => item.id !== action.payload);
  }

  if (action.type === DONE_TOGGLE) {
    return items.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          done: !item.done,
        }
      }

      return item;
    })
  }
};