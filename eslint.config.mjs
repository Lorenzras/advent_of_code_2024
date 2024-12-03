// @ts-check
import jestPlugin from 'eslint-plugin-jest';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';


export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  jestPlugin.configs['flat/all'],
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    "rules": {
      "jest/prefer-expect-assertions": [
        "warn",
        { "onlyFunctionsWithAsyncKeyword": true }
      ]
    }
  },
  {
    ignores: ['*.config.*',],
  },

);