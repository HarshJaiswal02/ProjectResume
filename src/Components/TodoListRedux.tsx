import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/todoSlice";

const TodoListRedux: React.FC = () => {
  const todos = useSelector((state) => state.todos);
  const inputValue = useRef();
  const dispatch = useDispatch();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(inputValue.current?.value);
  const handleUpdate = (ID, TEXT) => {
    dispatch(updateTodo({ id: ID, text: TEXT }));
    setIsTodoEditable(false);
  };
  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-1 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded w-2/4"
            key={todo.id}
          >
            <input
              type="text"
              value={todo.text}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
              ref={inputValue}
            ></input>
            <div className="flex gap-5">
              <button
                onClick={() => {
                  if (isTodoEditable) {
                    handleUpdate(todo.id, todoMsg);
                  } else setIsTodoEditable((prev) => !prev);
                }}
                className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-non rounded text-md"
              >
                ...
              </button>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoListRedux;
