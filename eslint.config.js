import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    ignores: ["node_modules/", "dist/"],
  },
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: reactPlugin
    },
    rules: {
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
  }
];
