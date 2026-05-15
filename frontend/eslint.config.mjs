// @ts-nocheck
import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default withNuxt(
    {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off', // Важно для FSD
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  configPrettier
);
