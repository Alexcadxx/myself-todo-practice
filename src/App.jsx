import { useState } from 'react';

import styles from './app.module.css';
import { Label } from './components/label';
import { User } from './components/user';

const getUser = () => ({
	name: 'Alex',
	age: 56,
	prop1: 'alex@mail.com',
	prop2: '+7 (999) 999 99-99',
});

export function App() {
	const initialValue = 0;
	const [value, setValue] = useState(initialValue);

	const start = getUser();

	return (
		<>
			<div className={styles.main}>
				<Label title={'Главная страница'} color={'red'} />
				<div className={styles.mainContent}>Контент главной страницы</div>
			</div>
			<User
				{...start}
				value={value}
				onStateValue1={setValue}
				initialValue={initialValue}
				onBonusecNall={setValue}
			/>
		</>
	);
}
