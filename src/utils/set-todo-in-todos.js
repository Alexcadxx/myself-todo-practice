export const setTodoInTodos = (todos, newTodoData) => {
	console.log('setTodoInTodos - todos:', todos);
	console.log('setTodoInTodos - newTodoData:', newTodoData);

	return todos.map((todo) => {
		console.log('setTodoInTodos - todos.map - todo:', todo);

		return todo.id === newTodoData.id
			? {
					...todo,
					...newTodoData,
				}
			: todo;
	});
};
