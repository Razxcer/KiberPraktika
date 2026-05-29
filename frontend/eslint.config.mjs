// @ts-nocheck
import withNuxt from './.nuxt/eslint.config.mjs'
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default withNuxt(
  {
    // Указываем файлы, которые линтер обязан проверять
    files: ['**/*.ts', '**/*.vue', '**/*.js'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off', 
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  prettierConfig
);