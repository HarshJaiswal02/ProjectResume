import React from "react";
// ${
//     todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}

// ${
    // todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"

// ${
//      isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//    } ${todo.completed ? "line-through" : ""}

// value={todoMsg}
//                 // onChange={(e) => setTodoMsg(e.target.value)}
//                 // readOnly={!isTodoEditable}


// onClick={() => {
//     if (todo.completed) return;

//     if (isTodoEditable) {
//         editTodo();
//     } else setIsTodoEditable((prev) => !prev);
// }}
// disabled={todo.completed}

// {isTodoEditable ? "📁" : "✏️"}

// onClick={() => deleteTodo(todo.id)
const TodoItems: React.FC = () => {
  return (
    <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black 
            `}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
    
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg `}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            >
               
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
                ❌
            </button>
        </div>
  )
}

export default TodoItems;
