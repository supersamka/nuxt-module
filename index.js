export default function SimpleModule(moduleOptions) {
  console.log('MODULE STUFF', moduleOptions);
  console.log('THIS IS MY CONTRIBUTION');
}

// REQUIRED if publishing the module as npm package
module.exports.meta = require('./package.json');
