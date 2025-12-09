// --> file use-get-products.js
import { useEffect, useState } from 'react';

export const useGetProducts = (isRefreshProduct) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);

		fetch(' http://localhost:3003/products')
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [isRefreshProduct]);

	return {
		products,
		isLoading,
	};
};
// ---------------------------------------------------------------------------------
