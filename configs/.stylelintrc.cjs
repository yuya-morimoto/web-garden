/** @type {import("@types/stylelint").Options} */

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: ['*.astro', '**/*.astro'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['*.vue', '**/*.vue'],
      extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-prettier',
        'stylelint-config-recommended-vue/scss',
      ],
    },
  ],
  rules: {
    'comment-empty-line-before': null,
    'shorthand-property-no-redundant-values': null,
    'scss/double-slash-comment-empty-line-before': null,
    'color-function-notation': null,
    'property-no-vendor-prefix': null,
    'value-keyword-case': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'hue-degree-notation': null,
    'length-zero-no-unit': null,
    'alpha-value-notation': null,
    'scss/at-import-partial-extension': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};