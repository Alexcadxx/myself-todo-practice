import { useState } from 'react';

import { Button } from '../button/button';

import styles from './control-panel.module.css';

export function ControlPanel({ onTodoAdd }) {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isSortingEnabled, setIsSortingEnabled] = useState(false);

	const onSearchPhraseChange = ({ target }) => {
		setSearchPhrase(target.value);
		console.log('target:', target);
		console.log('target.value:', target.value);
	};
	const onSortingChange = ({ target }) => {
		setIsSortingEnabled(target.checked);
		console.log('target:', target);
		console.log('target.checked:', target.checked);
	};

	return (
		<div className={styles.controlPanel}>
			<input
				className={styles.search}
				type="text"
				value={searchPhrase}
				placeholder="Search..."
				onChange={onSearchPhraseChange}
			/>
			<input
				className={styles.sortingButton}
				type="checkbox"
				checked={isSortingEnabled}
				onChange={onSortingChange}
			/>
			<Button onClick={onTodoAdd}>✚</Button>
		</div>
	);
}
