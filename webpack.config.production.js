var devConfig = require("./webpack.config");
var webpackStrip = require("strip-loader"); // stripout the define things of the production code

var stripLoader={
    test:[/\.js$/,/\.es6$/],
    exclude:/node_modules/,
    loader:webpackStrip.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;
