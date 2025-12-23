export const removeTodoFromTodos = (todos, todoId) =>
	todos.filter(({ id }) => id !== todoId);
