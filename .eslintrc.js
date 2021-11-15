module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": ["plugin:prettier/recommended"],
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugin": ["prettier"],
	"rules": {
		"prettier/prettier": "error",
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		]
	}
}
