export interface Todo {
  id: number;
  text: string;
  status: string;
}

export const loadTodos = (): Todo[] => {
  const storedTasksJSON = localStorage.getItem('tasks');
  return storedTasksJSON ? JSON.parse(storedTasksJSON) : [];
};

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem('tasks', JSON.stringify(todos));
};

export const addTodo = (todos: Todo[], text: string, setTodos: Function): void => {
  const newTask = { id: todos.length + 1, text, status: 'incomplete' };
  const updatedTodos = [...todos, newTask];
  saveTodos(updatedTodos);
  setTodos(updatedTodos);
};

export const deleteTodo = (todos: Todo[], id: number,  setTodos: Function): void => {
  const updatedTodos = todos.filter(todo => todo.id !== id);
  saveTodos(updatedTodos);
  setTodos(updatedTodos);
};

export const toggleComplete = (todos: Todo[], id: number, setTodos: Function): void => {
  const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, status: todo.status === 'completed' ? 'incomplete' : 'completed' } : todo);
  saveTodos(updatedTodos);
  setTodos(updatedTodos);
};
