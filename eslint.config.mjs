import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    ignores: ['node_modules'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
    },
    rules: {
      eqeqeq: 'error', 
      'no-unused-vars': 'error',
      'prefer-const': 'error', 
    },
  },
];
