import { ADD, REMOVE, DONE_TOGGLE } from "./types";

export const add = (content) => ({
  type: ADD,
  payload: content,
});

export const remove = (id) => ({
  type: REMOVE,
  payload: id,
});

export const doneToggle = (id) => ({
  type: DONE_TOGGLE,
  payload: id,
});