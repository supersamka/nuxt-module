export default function SimpleModule(moduleOptions) {
  console.log('MODULE STUFF', moduleOptions);
}

// REQUIRED if publishing the module as npm package
module.exports.meta = require('./package.json');
