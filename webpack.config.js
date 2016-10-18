module.exports = {
	  entry: './src/app.js'
	, module: {
		loaders: [
			{
				  test: /\.js/
				, exclude: /node_modules/
				, loader: 'babel'
			}
			, {
				  test: /\.css/
				, exclude: /node_modules/
				, loader: 'style-loader!css-loader'
			}
			, {
				  test: /\.html$/
				, loader: 'html-loader'
			}
		]
	}
	, resolve: {
		extensions: ['', '.js']
	}
	, output: {
		  path: __dirname + '/dist'
		, publicPath: '/'
		, filename: 'bundle.js'
	}
};