module.exports = {
  extends: 'eslint-config-rc',
  rules: {
    'require-jsdoc': [ 'off', {}],
    'valid-jsdoc': [ 'off', {}],
    'node/prefer-promises/fs': [ 'off' ],
    'no-bitwise': [ 'off' ],
  },
};
