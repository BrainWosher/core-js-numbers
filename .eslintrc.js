module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2024: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2024,
  },
  noInlineConfig: true,
};
