import { useEffect, useState } from 'react';

import styles from './app.module.css';
export function App() {
	const [products, setProducts] = useState([]);
	const [nameValue, setNameValue] = useState('');
	const [priceValue, setPriceValue] = useState(0);
	const [pscValue, setPscValue] = useState(0);
	const [refreshProduct, setRefreshProduct] = useState(false);

	console.log('refreshProduct', refreshProduct);

	const newAmount = priceValue * pscValue;

	let url = 'http://localhost:3003/products';

	const editProductInProducts = (products, newProductData) =>
		products.map((product) =>
			product.id === newProductData.id
				? {
						...product,
						...newProductData,
					}
				: product,
		);

	console.log('editProductInProducts', products);

	const onAddProduct = () => {
		fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			body: JSON.stringify({
				nameProd: nameValue,
				price: priceValue,
				pcs: pscValue,
				amount: newAmount,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Product has been added, server response:', response);
				setRefreshProduct(!refreshProduct);
			})
			.finally(() => {
				setNameValue('');
				setPriceValue(0);
				setPscValue(0);
			});
	};

	const onRemove = (id) => {
		fetch((url += `/${id}`), {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Product has been deleted, server response:', response);
				setRefreshProduct(!refreshProduct);
			});
	};

	const onProductEdit = (id) => {
		setProducts(editProductInProducts(products, { id, isEditing: true }));
	};
	const onProductNameChange = (id, newName) => {
		setProducts(editProductInProducts(products, { id, nameProd: newName }));
	};

	const onProductUpdate = (id, newNameProd) => {
		fetch((url += `/${id}`), {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json; charset=utf-8' },
			body: JSON.stringify({
				nameProd: newNameProd,
				// price: priceValue,
				// pcs: pscValue,
				// amount: newAmount,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Product has been updated, server response:', response);
				setRefreshProduct(!refreshProduct);
			});
	};

	// setIsEditing(true);

	useEffect(() => {
		fetch(url)
			.then((jsonData) => jsonData.json())
			.then((loadedData) => setProducts(loadedData));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refreshProduct]);

	// let isEditing = false;

	return (
		<div className={styles.app}>
			<h3>Products table</h3>
			{products.map(({ id, nameProd, price, pcs, amount, isEditing = false }) => (
				<div key={id}>
					{isEditing ? (
						<div>
							<form>
								<label htmlFor="prodName2">Product name: </label>
								<input
									className={styles.inputProdName}
									type="text"
									value={nameProd}
									id="prodName2"
									onChange={({ target }) => onProductNameChange(id, target.value)}
								/>
								<label htmlFor="inputProdPrice2">price: $</label>
								<input
									className={styles.inputProdPrice}
									type="text"
									value={price}
									id="inputProdPrice2"
									onChange={({ target }) => setPriceValue(target.value)}
								/>
								<label htmlFor="prodPcs2">pcs: </label>
								<input
									className={styles.inputProdPcs}
									type="text"
									value={pcs}
									id="prodPcs2"
									onChange={({ target }) => setPscValue(target.value)}
								/>
								<label htmlFor="prodAmount2">total amoun: $</label>
								<input
									className={styles.inputAmount}
									type="text"
									value={amount}
									id="prodAmount2"
									readOnly
								/>
								<button
									type="button"
									className={styles.btnEditProduct}
									onClick={() => onProductUpdate(id, nameProd)}
								>
									✎
								</button>
							</form>
						</div>
					) : (
						<div>
							<span className={styles.productName}>{`Product name:`}</span>
							<span className={styles.ownName} onClick={() => onProductEdit(id)}>
								{nameProd}
							</span>
							<span className={styles.productId}>{`ID:  ${id}`}</span>
							<span className={styles.producPrice}>{`price: $${price}`}</span>
							<span className={styles.productPcs}>{`pcs:  ${pcs}`}</span>
							<span className={styles.totalAmount}>{`total amount:  $${amount}`}</span>
							<button className={styles.button} onClick={() => onRemove(id)}>
								❌
							</button>
						</div>
					)}
				</div>
			))}

			<div className={styles.inputProduct}>
				<form>
					<label htmlFor="prodName">Product name: </label>
					<input
						className={styles.inputProdName}
						type="text"
						value={nameValue}
						id="prodName"
						onChange={({ target }) => setNameValue(target.value)}
					/>
					<label htmlFor="inputProdPrice">price: $</label>
					<input
						className={styles.inputProdPrice}
						type="text"
						value={priceValue}
						id="inputProdPrice"
						onChange={({ target }) => setPriceValue(target.value)}
					/>
					<label htmlFor="prodPcs">pcs: </label>
					<input
						className={styles.inputProdPcs}
						type="text"
						value={pscValue}
						id="prodPcs"
						onChange={({ target }) => setPscValue(target.value)}
					/>
					<label htmlFor="prodAmount">total amoun: $</label>
					<input
						className={styles.inputAmount}
						type="text"
						value={newAmount}
						id="prodAmount"
						readOnly
					/>
					<button type="button" className={styles.btnSendProduct} onClick={onAddProduct}>
						Send
					</button>
				</form>
			</div>
		</div>
	);
}
