import { useEffect, useState } from 'react';

import styles from './app.module.css';

export function App() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isCreating, setIsCreating] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [isRefreshProduct, setIsRefreshProduct] = useState(false);

	const refreshProduct = () => setIsRefreshProduct(!isRefreshProduct);

	useEffect(() => {
		setIsLoading(true);

		fetch(' http://localhost:3003/products')
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			})
			.finally(() => {
				setIsLoading(false);
				setIsCreating(false);
				setIsUpdating(false);
				setIsDeleting(false);
			});
	}, [isRefreshProduct]);

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
			});
		// .finally(() => setIsCreating(false));
	};

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
			.then((response) => {
				console.log('Смартфон обновлен, ответ сервера:', response);
				refreshProduct();
			});
		// .finally(() => setIsUpdating(false));
	};

	const requesDeleteHairdryer = () => {
		setIsDeleting(true);
		fetch('http://localhost:3003/products/003', {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Фен удален, ответ сервера:', response);
				refreshProduct();
			});
		// .finally(() => setIsDeleting(false));
	};

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
			<button disabled={isCreating} onClick={requestAddVacuumCleaner}>
				Добавить пылесос
			</button>
			<button disabled={isUpdating} onClick={requestUpdateSmartphone}>
				Обновить смартфон
			</button>
			<button disabled={isDeleting} onClick={requesDeleteHairdryer}>
				Удалить фен
			</button>
		</div>
	);
}
