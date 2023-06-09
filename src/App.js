import { useState } from "react";
import { add, remove, doneToggle } from "./slices/todo";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // С помощью хука useSelector получим доступ к состоянию хранилища (store)
  // и извлечем из него необходимые данные.
  const items = useSelector((state) => state.todo);
  
  // Хук useDispatch предоставляет функцию dispatch,
  // с помощью неё отправляем действия для изменения состояния.
  const dispatch = useDispatch();

  // Это изначально пустая строка с названием новой задачи
  const [value, setValue] = useState('');

  // При клике на кнопку вызовем функция dispatch(doneToggle()), 
  // которая отправит действие doneToggle в редьюсер и там изменит состояние
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
