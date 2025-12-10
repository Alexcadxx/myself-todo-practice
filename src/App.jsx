// --> file App.jsx
import { useState } from 'react';

import styles from './app.module.css';
import {
	useAddVacuumCleaner,
	useUpdateSmartphone,
	useDeleteHaierDrayer,
	useGetProducts,
} from './hooks';

export function App() {
	const [products, setProducts] = useState([]);
	const { isCreating, requestAddVacuumCleaner } = useAddVacuumCleaner(setProducts);
	const { isUpdating, requestUpdateSmartphone } = useUpdateSmartphone(setProducts);
	const { isDeleting, requesDeleteHairdryer } = useDeleteHaierDrayer(setProducts);
	const { isLoading } = useGetProducts(products, setProducts);

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
// --------------------------------------------------------------------------------------------
