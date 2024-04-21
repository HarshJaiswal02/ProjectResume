import React, { useEffect, useState } from "react";
import UserContextProvider from "./ContextApi/userContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Router from "./Routing/routers";
import Card from "./Components/Card";
import { ThemeProvider } from "./ContextApi/Theme";
import TodoForm from "./Components/TodoForm";
import TodoItems from "./Components/TodoItems";
import { Todo, TodoProvider } from "./ContextApi/TodoContext";

const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState<string>("light");

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, updatedtodo: Todo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedtodo : todo)));
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompeleted: !todo.isCompeleted } : todo
      )
    );
  };

  useEffect(() => {
    const storedTodosString = localStorage.getItem("todos");

    if (storedTodosString) {
      try {
        console.log(typeof storedTodosString);
        const storedTodos = JSON.parse(storedTodosString) as Todo[];
        console.log(typeof storedTodos);
        if (storedTodos.length > 0) setTodos(storedTodos);
      } catch (error) {
        console.error("Error parsing todos from localStorage:", error);
        setTodos([]);
      }
    } else {
      console.log("No todos found in localStorage");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <UserContextProvider>
      <Router />
      <div className="text-center w-full font-thin fw-semibold text-2xl">
        Context API
      </div>
      <Login />
      <Profile />

      <div className="flex gap-3 ml-3 mb-10 ">
        <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
          <Card />
          <TodoProvider
            value={{ addTodo, deleteTodo, editTodo, todos, toggleComplete }}
          >
            <div className="dark:bg-[#172842] bg-slate-100 w-full rounded mr-2 ">
              <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 dark:text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                  Manage Your Todos
                </h1>
                <div className="mb-4">
                  <TodoForm />
                </div>
                <div className="flex flex-wrap gap-y-3">
                  {todos.map((todo) => (
                    <div key={todo.id} className="w-full">
                      <TodoItems todo={todo} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TodoProvider>
        </ThemeProvider>
      </div>
    </UserContextProvider>
  );
};

export default App;
