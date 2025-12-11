import styles from './todo.module.css';

export function Todo({ completed, title }) {
	return (
		<div className={styles.todo}>
			<input className={styles.checkbox} type="checkbox" checked={completed} readOnly />
			{title}
		</div>
	);
}
