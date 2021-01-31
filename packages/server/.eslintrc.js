module.exports = {
  "root": true,
  "extends": [
    "plugin:prettier/recommended",
  ],
  "plugins": ["import"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname
  },
  "rules": {
    "no-console": "warn",
    "no-unused-vars": [
      "warn",
      {
        "args": "after-used",
        "ignoreRestSiblings": false,
        "argsIgnorePattern": "^_$"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "printWidth": 100,
        "trailingComma": "all",
        "tabWidth": 2,
        "semi": true,
        "singleQuote": false,
        "bracketSpacing": false,
        "arrowParens": "always"
      }
    ],
    "import/order": ["warn", {"newlines-between": "always"}]
  }
}
