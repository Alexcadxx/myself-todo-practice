// --> User

import { Contacts } from '../contacts';
import { Label } from '../label/label';

import styles from './user.module.css';

export const User = ({
	initialValue,
	value,
	onBonusecNall,
	onStateValue1,
	...contacts
}) => {
	const { name, age, ...contact } = contacts;
	return (
		<>
			<div className={styles.user}>
				<Label title={'Пользователь:'} color={'blue'} />
				<div>Имя: {name}</div>
				<div>Возраст: {age}</div>
			</div>
			<Contacts
				{...contact}
				value={value}
				initialValue={initialValue}
				onSetValue2={onStateValue1}
				onBonusecNall={onBonusecNall}
			/>
		</>
	);
};
