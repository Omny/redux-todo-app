import { useReducer, useState } from "react";

import { add, remove, doneToggle } from "./state/actionGenerators";
import { reducer } from "./state/reducer";

function App() {
  const [items, dispatch] = useReducer(reducer, [
    { id: 1, content: 'Make homework', done: false },
    { id: 2, content: 'Write a post', done: false },
    { id: 3, content: 'Share a post', done: false },
    { id: 4, content: 'Look a the site', done: false },
  ]);

  const [value, setValue] = useState('');

  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => dispatch(add(value))}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <button onClick={() => dispatch(doneToggle(item.id))}>Done</button>
            <button onClick={() => dispatch(remove(item.id))}>Remove</button>
            {' '}
            <span className={item.done ? 'done' : ''}>{item.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
