module.exports = {
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['prettier'],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-imports': 'off',
  },
}
