module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'no-bitwise': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': 'off', // disable if necessary
    'react/static-property-placement': 'off', // disable if necessary
    'react/jsx-props-no-spreading': 'off', // disable if necessary
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
  },
  parser: 'babel-eslint',
};
