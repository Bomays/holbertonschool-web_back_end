import globals from "globals";
import js from "@eslint/js";
import eslintPluginJest from "eslint-plugin-jest";
import airbnbBase from 'eslint-config-airbnb-base';
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...compat.config(airbnbBase),
  {
    files: ["**/*.js"],
    ignores: ["babel.config.js"],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: {
        ...globals.es6,
        ...globals.jest,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
    },
    plugins: {
      jest: eslintPluginJest,
    },
    rules: {
      "max-classes-per-file": "off",
      "no-underscore-dangle": "off",
      "no-console": "off",
      "no-shadow": "off",
      "no-restricted-syntax": [
        "error",
        "LabeledStatement",
        "WithStatement",
      ],
      "indent": ["error", 2],
      "no-tabs": "error",
      "no-mixed-spaces-and-tabs": "error",
    },
  },
  ...compat.config({ extends: ["plugin:jest/all"] }),
  js.configs.recommended,
];
