/*eslint-env node*/
module.exports = {
  root: true,
  extends: ['../../.eslintrc.cjs'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.json'],
      },
      typescript: {
        config: 'tsconfig.json',
        project: './apps/backend-hono',
        alwaysTryTypes: true,
      },
    },
  },
}
