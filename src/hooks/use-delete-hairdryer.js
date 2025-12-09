// --> file use-delete-hairdryer.js
import { useState } from 'react';

export const useDeleteHaierDrayer = (refreshProduct) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requesDeleteHairdryer = () => {
		setIsDeleting(true);
		fetch('http://localhost:3003/products/003', {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Фен удален, ответ сервера:', response);
				refreshProduct();
			})
			.finally(() => setIsDeleting(false));
	};
	return {
		isDeleting,
		requesDeleteHairdryer,
	};
};
// ------------------------------------------------------------------------
