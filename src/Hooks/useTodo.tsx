import { useContext } from "react";
import { TodoContext, TodoContextType } from "../ContextApi/TodoContext";

export const useTodo = (): TodoContextType => {
  return useContext(TodoContext);
};
