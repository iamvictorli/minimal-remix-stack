/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'no-console': 'warn',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    // @typescript-eslint
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-throw-literal': 'off', // for CatchBoundaries
    //import
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './app/core',
            from: './app/modules',
          },
          {
            target: './app/core',
            from: './app/routes',
          },
          {
            target: './app/modules',
            from: './app/routes',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: [
        './app/root.tsx',
        './app/entry.client.tsx',
        './app/entry.server.tsx',
        './app/routes/**/*.tsx',
      ],
      rules: {
        'import/no-default-export': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
}
