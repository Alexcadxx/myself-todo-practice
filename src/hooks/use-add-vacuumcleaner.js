// --> file use-add-vacuumcleaner.js
import { useState } from 'react';

export const useAddVacuumCleaner = (setProducts) => {
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
			.then((newProduct) => {
				console.log('Пылесос добавлен, ответ сервера:', newProduct);
				setProducts((prevProducts) => [...prevProducts, newProduct]);
			})
			.finally(() => setIsCreating(false));
	};
	return {
		isCreating,
		requestAddVacuumCleaner,
	};
};
// -----------------------------------------------------------------------------------
