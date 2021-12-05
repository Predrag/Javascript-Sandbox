module.exports = {
	'env': {
		'browser': true,
		'es2015': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:security/recommended'
	],
	'plugins': ['@typescript-eslint', 'security'],
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
		'semi-spacing': 2,
		'quotes': ['error', 'single'],
		'arrow-spacing': 'error',
		'block-spacing': 'error',
		'object-curly-spacing': ['error', 'always'],
		'comma-spacing': ['error', { 'before': false, 'after': true }],
		'key-spacing': ['error', { 'afterColon': true }],
		'arrow-body-style': ['error', 'always'],
		'no-eq-null': 'error',
		'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
		'keyword-spacing': 2,
		'prefer-template': 2


	}
};
