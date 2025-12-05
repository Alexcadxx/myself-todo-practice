import { useEffect, useState } from 'react';

import styles from './app.module.css';

const PRODUCTS_MOCK = [
	{ id: '001', name: 'TV set', price: 39900 },
	{ id: '002', name: 'Smartphone', price: 18900 },
	{ id: '003', name: 'Hairdryer', price: 1749 },
];
export function App() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		new Promise((resolve) => {
			setTimeout(() => {
				resolve({ json: () => PRODUCTS_MOCK });
			}, 5000);
		})

			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			})
			.finally(() => setIsLoading(false));
	}, []);
	console.log('products', products);

	return (
		<div className={styles.app}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				products.map(({ id, name, price }) => (
					<div key={id}>
						{name} - {price} rub
					</div>
				))
			)}
		</div>
	);
}
