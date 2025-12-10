// --> file use-update-smartphone.js
import { useState } from 'react';

export const useUpdateSmartphone = (setProducts) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const requestUpdateSmartphone = () => {
		setIsUpdating(true);
		fetch('http://localhost:3003/products/002', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			body: JSON.stringify({
				name: 'Updated Smartphone ',
				price: 17890,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((updateProduct) => {
				console.log('Смартфон обновлен, ответ сервера:', updateProduct);
				setProducts((prevProducts) =>
					prevProducts.map(
						(product) => (product.id === updateProduct.id ? updateProduct : product),
						console.log('updateProduct ', updateProduct),
						console.log('prevProducts', prevProducts),
					),
				);
			})
			.finally(() => setIsUpdating(false));
	};

	return {
		isUpdating,
		requestUpdateSmartphone,
	};
};
// --------------------------------------------------------------------------------
