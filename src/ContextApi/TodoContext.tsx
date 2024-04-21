import { createContext } from "react";
export interface Todo {
  id: number;
  todo: string;
  isCompeleted: boolean;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, updatedTodo: Todo) => void;
  toggleComplete: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  toggleComplete: () => {},
});

export const TodoProvider = TodoContext.Provider;
