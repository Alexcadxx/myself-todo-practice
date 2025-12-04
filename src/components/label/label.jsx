// --> Label

import styles from './label.module.css';

export const Label = ({ title, color }) => {
	return <label className={`${styles.mainLabel} ${styles[color]} `}>{title}</label>;
};
