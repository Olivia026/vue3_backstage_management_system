import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettierPlugin from 'eslint-plugin-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
	{
		ignores: [
			'**/dist/**', // 忽略 dist 目录
			'**/node_modules/**', // 忽略 node_modules
			'**/*.test.js', // 忽略所有测试文件
			'**/temp/*.vue', // 忽略 temp 目录下的 .vue 文件
			'.eslintrc.js' // 忽略旧版配置文件（如果存在）
		]
	},

	{
		files: ['**/*.{js,mjs,cjs,ts,vue}'],
		plugins: { js, prettier: prettierPlugin },
		extends: ['js/recommended']
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,vue}'],
		languageOptions: { globals: globals.browser }
	},
	tseslint.configs.recommended,
	pluginVue.configs['flat/essential'],
	{
		files: ['**/*.vue'],
		languageOptions: { parserOptions: { parser: tseslint.parser } }
	},
	{
		rules: {
			quotes: 'off', // 关闭ESLint的引号规则
			// ESLint 基础规则 (https://eslint.org/docs/rules/)
			'no-var': 'error', // 要求使用 let 或 const 而不是 var
			'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
			'no-unexpected-multiline': 'error', // 禁止意外的多行
			'no-useless-escape': 'off', // 禁止不必要的转义字符

			// TypeScript 规则 (https://typescript-eslint.io/rules/)
			'@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
			'@typescript-eslint/prefer-ts-expect-error': 'error', // 推荐使用 @ts-expect-error 而不是 @ts-ignore
			'@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
			'@typescript-eslint/no-non-null-assertion': 'off', // 允许非空断言 (!)
			'@typescript-eslint/no-namespace': 'off', // 允许使用命名空间
			'@typescript-eslint/semi': 'off', // 不强制分号

			// Vue 规则 (https://eslint.vuejs.org/rules/)
			'vue/multi-word-component-names': 'off', // 允许单字组件名
			'vue/no-mutating-props': 'off', // 允许修改 props
			'vue/attribute-hyphenation': 'off', // 不强制属性连字符
			'prettier/prettier': ['error', { singleQuote: true }]
		}
	}
])
