module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off", //Existe uma regra no ESLint que diz q todo method tem que ter o 'this'. Essa regra é para dizer que eu não concordo com isso
    "no-param-reassign": "off",
    "camelcase": "off", //implica no formato do nome das variáveis
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
  },
};
