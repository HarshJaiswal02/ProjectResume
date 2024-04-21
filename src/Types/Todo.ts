export type Todos = [
  todos: {
    id: number;
    todo: string;
    isCompleted: boolean;
  },
  addTodo: (todo: Todos[]) => void,
  deleteTodo: (id: number) => void,
  editTodo: (id: number, todo: Todos[]) => void,
  toggleTodo: (id: number) => void
];
