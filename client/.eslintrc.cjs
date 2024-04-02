module.exports = {
	root: true,
	env: {
		es6: true
	},
	extends: [
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended'
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		allowImportExportEverywhere: true,
		ecmaFeatures: {
			jsx: true
		}
	},
	"rules": {
		"semi": [2]
	},
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': 'warn',
	}
};