var path = require('path');
var webpack = require("webpack");


module.exports = {
	devtool: 'eval',
	entry: ['webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', "./src/js/app.jsx"],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "bundle.js",
		publicPath: '/dist/'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.jsx$/, loader: "react-hot-loader!jsx-loader?harmony", include: path.join(__dirname, 'src')}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: "react/addons",
			Reflux: "reflux",
			Router: "react-router",
			Link: require("react-router").Link
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};