module.exports = {
  ...require('@uifabric/build/jest'),
  name: 'react-northstar-emotion-renderer',
  moduleNameMapper: require('lerna-alias').jest({
    directory: require('@uifabric/build/monorepo/findGitRoot')(),
  }),
};
