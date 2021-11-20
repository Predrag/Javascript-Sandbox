module.exports = {
	'env': {
		'browser': true,
		'es2015': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'plugins': ['@typescript-eslint'],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 2015,
		'sourceType': 'module'
	},
	'rules': {
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'arrow-spacing': 'error',
		'block-spacing': 'error'
	}
};
