// --> file use-add-vacuumcleaner.js
import { useState } from 'react';

export const useAddVacuumCleaner = (refreshProduct) => {
	const [isCreating, setIsCreating] = useState(false);
	const requestAddVacuumCleaner = () => {
		setIsCreating(true);
		fetch('http://localhost:3003/products', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			body: JSON.stringify({
				name: 'New vacuumcleaner',
				price: 4690,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Пылесос добавлен, ответ сервера:', response);
				refreshProduct();
			})
			.finally(() => setIsCreating(false));
	};
	return {
		isCreating,
		requestAddVacuumCleaner,
		setIsCreating,
	};
};
// -----------------------------------------------------------------------------------
