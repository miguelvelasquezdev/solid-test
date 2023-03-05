module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
  parser: "@typescript-eslint/parser",
  plugins: ["solid"],
  extends: ["eslint:recommended", "plugin:solid/typescript"],
};
