module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{test: /\.css$/, loader: 'style!css'},
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel', // 'babel-loader' is also a valid name to reference
	      query: {
	        presets: ['es2015','react']
	      }
	    }			
		]
	}
};