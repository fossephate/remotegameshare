// webpack.config.js
const path = require("path");
module.exports = {
	mode: "development",
	entry: "./public/js/main2.js",
	output: {
		filename: "bundle.js",
		// 		publicPath: "./dist2/",
		path: __dirname + "/public/dist",
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: "babel-loader",
		}],
	},
	// 	modules: [path.resolve(__dirname, "app"), "node_modules"],
	resolve: {
		alias: {
			js: path.resolve(__dirname, "./public/js/"),
			src: path.resolve(__dirname, "./src/"),
		},
	},
	devtool: "source-map",
};
