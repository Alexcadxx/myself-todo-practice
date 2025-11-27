import { Bonuce } from '../bonuces';
import { Label } from '../label/label';

import styles from './contact.module.css';

export const Contacts = ({
	initialValue,
	value,
	onBonusecNall,
	onSetValue2,
	...props
}) => {
	const { prop1, prop2 } = props;
	return (
		<>
			<div className={styles.contact}>
				<Label title={'Контакты:'} color={'green'} />
				<div>Электронная почта: {prop1}</div>
				<div>Телефон: {prop2}</div>
			</div>
			<Bonuce
				initialValue={initialValue}
				value={value}
				onSetValue3={onSetValue2}
				onBonusecNall={onBonusecNall}
			/>
		</>
	);
};
