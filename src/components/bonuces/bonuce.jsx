// --> Bonuce

import { Label } from '../label';

import styles from './bonuce.module.css';

export const Bonuce = ({ initialValue, value, onSetValue3, onBonusecNall }) => {
	return (
		<>
			<div className={styles.bonuce}>
				<Label title={'Бонусы:'} color={'yellow'} />
				<div className={styles.bonuceValue}>{value}</div>
			</div>
			<div className={styles.button}>
				<button onClick={() => onSetValue3(value + 1)}>Добавить бонусов</button>
				<button onClick={() => onBonusecNall(initialValue)}>Обнулить бонусы</button>
			</div>
		</>
	);
};
