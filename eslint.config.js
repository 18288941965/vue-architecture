import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts,vue}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {files: ['**/*.vue'], languageOptions: {parserOptions: {parser: tseslint.parser}}},
  {
    rules: {
      // 字符串用单引号
      'quotes': ['error', 'single'],
      // 禁用debugger | 开发环境虽然会警告，不过依旧可以使用，只是为了打包报错
      'no-debugger': 'error',
      // // 声明的变量必须被使用
      'no-unused-vars': 'error',
      // 结尾不可以使用分号：根据个人喜好修改规则，没有一个统一的标准
      'semi': ['error', 'never'],
      // 行对象结尾不能用逗号，换行对象必须用逗号
      'comma-dangle': ['error', 'always-multiline'],
      // 强制 Vue 组件名使用大驼峰命名
      'vue/component-options-name-casing': ['error', 'PascalCase'],
    },
  },
]