export default {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-scss',
		'stylelint-config-recommended-vue',
		'stylelint-config-recommended-vue/scss'
	],
	plugins: ['stylelint-order'],
	rules: {
		'order/properties-alphabetical-order': true,
		'selector-class-pattern': null,
		'no-descending-specificity': null,
		'font-family-no-missing-generic-family-keyword': null,
		'no-empty-source': null,
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'apply', 'layer']
			}
		],
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'apply', 'layer']
			}
		]
	}
}
