import { HTTP_METHOD } from '../constants';

const fetchServer = (method, { id, ...payload } = {}) => {
	let url = `http://localhost:3003/todos`;

	let options = {
		method,
		headers: { 'Content-Type': 'application/json' },
	};

	if (method === HTTP_METHOD.GET) {
		url += '';
	} else {
		// if (method !== HTTP_METHOD.GET && method !== HTTP_METHOD.POST) {
		if (method !== HTTP_METHOD.POST) {
			url += `/${id}`;
		}

		// if (method !== HTTP_METHOD.GET && method !== HTTP_METHOD.DELETE) {
		if (method !== HTTP_METHOD.DELETE) {
			options.body = JSON.stringify(payload);
		}
	}

	console.log('url:', url);
	console.log('options:', options);

	return fetch(url, options).then((jsonData) => jsonData.json());
};

export const creatTodo = (newTodo) => fetchServer('POST', newTodo);
export const readTodos = () => fetchServer('GET');
export const updateTodo = (todoData) => fetchServer('PATCH', todoData);
export const deleteTodo = (todoID) => fetchServer('DELETE', { id: todoID });
