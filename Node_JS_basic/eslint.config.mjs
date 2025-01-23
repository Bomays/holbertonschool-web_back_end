import globals from "globals";
import js from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      "indent": ["error", 2],
      "no-tabs": "error",
      "no-mixed-spaces-and-tabs": "error"
    }
  },
  js.configs.recommended
];
