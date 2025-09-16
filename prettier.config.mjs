const config = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  bracketSpacing: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports', // import 문 정렬
    'prettier-plugin-tailwindcss', // Tailwind 클래스 정렬
  ],
  importOrder: [
    '^react$', // React를 최상단에
    '^next$',
    '<THIRD_PARTY_MODULES>', // 외부 라이브러리
    '^[@]+/', // @로 시작하는 alias 경로
    '^[.]+/', // 상대 경로 import
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
}

export default config
