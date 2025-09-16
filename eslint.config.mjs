import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  ...compat.config({
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_', // _로 시작하는 매개변수 무시
          varsIgnorePattern: '^_', // _로 시작하는 변수 무시
        },
      ],
      // console 직접 호출 금지
      'no-console': 'error',
      // localStorage, sessionStorage 직접 호출 금지
      'no-restricted-globals': [
        'error',
        {
          name: 'localStorage',
          message:
            "Use localStorageWrapper from '@/services/localStorage' instead of direct localStorage access.",
        },
        {
          name: 'sessionStorage',
          message:
            "Use sessionStorageWrapper from '@/services/sessionStorage' instead of direct sessionStorage access.",
        },
      ],
    },
  }),
  {
    files: ['src/services/**/*.ts'], // services 폴더 내에서는 예외 허용
    rules: {
      'no-console': 'off',
      'no-restricted-globals': 'off',
    },
  },
]

export default eslintConfig
