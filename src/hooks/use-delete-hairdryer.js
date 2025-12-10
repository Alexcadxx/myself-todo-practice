// --> file use-delete-hairdryer.js
import { useState } from 'react';

export const useDeleteHaierDrayer = (setProducts) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requesDeleteHairdryer = () => {
		setIsDeleting(true);
		fetch('http://localhost:3003/products/003', {
			method: 'DELETE',
		})
			.then(() => {
				setProducts((prevProducts) =>
					prevProducts.filter((product) => product.id !== '003'),
				);
			})
			.finally(() => setIsDeleting(false));
	};
	return {
		isDeleting,
		requesDeleteHairdryer,
	};
};
// ------------------------------------------------------------------------
