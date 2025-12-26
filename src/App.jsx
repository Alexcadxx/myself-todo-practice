import { useEffect, useState } from 'react';

import { readTodos, updateTodo, deleteTodo, creatTodo } from './api/api';
import styles from './app.module.css';
import { Todo, ControlPanel } from './components';
import { NEW_TODO_ID } from './constants';
import { removeTodoFromTodos, setTodoInTodos, findTodo, addTodoInTodos } from './utils';

export function App() {
	const [todos, setTodos] = useState([]);

	const onTodoAdd = () => {
		setTodos(addTodoInTodos(todos));
	};

	const onTodoSave = (todoId) => {
		const { title, completed } = findTodo(todos, todoId) || { title: 'No data' };
		console.log('onTodoSave - todoId', todoId);
		console.log('onTodoSave - todos', todos);

		if (todoId === NEW_TODO_ID) {
			creatTodo({ title, completed }).then((todo) => {
				let updatedTodos = setTodoInTodos(todos, {
					id: NEW_TODO_ID,
					isEditing: false,
				});
				updatedTodos = removeTodoFromTodos(updatedTodos, NEW_TODO_ID);
				updatedTodos = addTodoInTodos(updatedTodos, todo);

				setTodos(updatedTodos);
			});
		} else {
			updateTodo({ id: todoId, title }).then(() => {
				setTodos(setTodoInTodos(todos, { id: todoId, isEditing: false }));
			});
		}
	};

	const onTodoEdit = (id) => {
		setTodos(setTodoInTodos(todos, { id, isEditing: true }));
		console.log('onTodoEdit', todos);
	};

	const onTodoTitleChange = (id, newTitle) => {
		setTodos(setTodoInTodos(todos, { id, title: newTitle }));
	};

	const onTodoCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted }).then(() => {
			setTodos(setTodoInTodos(todos, { id, completed: newCompleted }));
		});
	};

	const onTodoRemove = (id) => {
		deleteTodo(id).then(() => setTodos(removeTodoFromTodos(todos, id)));
	};

	useEffect(() => {
		readTodos().then((loadedTodos) => setTodos(loadedTodos.reverse()));
	}, []);

	return (
		<div className={styles.app}>
			<ControlPanel onTodoAdd={onTodoAdd} />
			<div>
				{todos.map(({ id, title, completed, isEditing = false }) => (
					<Todo
						key={id}
						id={id}
						title={title}
						completed={completed}
						isEditing={isEditing}
						onEdit={() => onTodoEdit(id)}
						onTitleChange={(newTitle) => onTodoTitleChange(id, newTitle)}
						onCompletedChange={(newCompleted) => onTodoCompletedChange(id, newCompleted)}
						onSave={() => onTodoSave(id)}
						onRemove={() => onTodoRemove(id)}
					/>
				))}
			</div>
		</div>
	);
}
