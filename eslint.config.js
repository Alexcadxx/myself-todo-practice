// eslint.config.js
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
export default [
	js.configs.recommended,
	{
		files: ['**/*.{js,jsx}'],
		ignores: ['node_modules/**', 'dist/**'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: { jsx: true }, // <-- moved here
			},
			globals: {
				window: 'readonly',
				document: 'readonly',
				navigator: 'readonly',
				console: 'readonly',
				...globals.browser,
			},
		},
		plugins: {
			js,
			react: reactPlugin,
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y,
			import: importPlugin,
		},
		settings: {
			react: { version: 'detect' },
		},
		rules: {
			// ✅ Show yellow squiggles for unused vars
			'no-unused-vars': [
				'warn',
				{ varsIgnorePattern: '^_', argsIgnorePattern: '^_' }, // allow underscore-prefixed to be ignored
			],
			'import/no-unused-modules': [
				'off',
				{
					missingImports: true,
					missingExports: true,
					src: ['src/**/*.{js,jsx}'],
					ignoreExports: ['src/main.jsx'],
					ignoreImports: ['src/main.jsx'],
				},
			],
			// 'import/no-unused-modules': [1, { missingExports: true }],
			// ✅ Ensure JSX components are marked "used"
			'react/jsx-uses-vars': 'error',
			// React 17+ / Vite: no need to import React in scope
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			// Hooks
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			// A11y (tune as you like)
			'jsx-a11y/anchor-is-valid': 'warn',
			// Import hygiene (optional but nice)
			'import/order': [
				'warn',
				{
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
			// 'unused-imports/no-unused-imports': 'error',
		},
	},
];
