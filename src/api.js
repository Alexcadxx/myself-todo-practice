export const getProducts = async () => {
	const url = 'http://localhost:3003/products';
	try {
		const responce = await fetch(url);
		if (!responce.ok) {
			throw new Error(`Error: ${responce.status}`);
		}
		const result = await responce.json();
		return result;
	} catch (err) {
		console.error(err.message);
	}
	//  finally {
	// 	isLoading(false);
	// }
};
