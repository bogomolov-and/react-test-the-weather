const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  app: resolvePath('src'),
  appHtml: resolvePath('src/index.html'),
  appIndexJs: resolvePath('src/index.jsx'),
  destination: resolvePath('dist'),
  nodeModules: resolvePath('node_modules'),
  packageJson: resolvePath('package.json'),
  root: resolvePath(''),
};
