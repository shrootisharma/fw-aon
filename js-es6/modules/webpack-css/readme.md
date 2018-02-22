# Webpack CSS HTML

		npm install html-webpack-plugin
	
- Edit **webpack.config.js**
- Add a require statement at the top of the file.

		const HtmlWebpackPlugin = require('html-webpack-plugin');

- Add a plugs-in object to the config file.

		  plugins: [ new HtmlWebpackPlugin({
		     template: path.join(paths.SOURCE, 'index.html'),
		   }),
		   
- Create **source/index.html**

		<html>
		  <head>
		    <title>Webpack</title>
		  </head>
		  <body>
		    <h1>dest/code.js</h1>
		    <script src="code.js"></script>
		  </body>
		</html>

- Review the scripts in package.json

		  "scripts": {
		    "build": "webpack -d --watch",
		    "serve": "webpack-dev-server"
		  },
		  
- Run the serve script

		npm run serve
		
- Open localhost:8080. It will serve up dest/index.html
- Note this is a in-memory copy of the HTML file. It is not written to the dest folder.

## CSS

- Create CSS file **styles/base.css**

		body{
		  font-family: tahoma;
		  color:darkslategrey;
		}
		
- Create CSS file **styles/style.css**

		h1{
		  font-size: 2.5rem;
		  text-align: center;
		}
				
- Install the relevant plug-ins.

		npm install css-loader extract-text-webpack-plugin
		
- Import CSS into our main **source/code.js**

		import './styles/base.css';
		import './styles/style.css';


- Update webpack.config.js

			const ExtractTextPlugin = require('extract-text-webpack-plugin');
		
		  plugins: [.. new ExtractTextPlugin('style.bundle.css'),
		 ],

- Edit the rules section

		    rules: [
		      {
		        test: /\.css$/,
		        loader: ExtractTextPlugin.extract({use: 'css-loader'}),
		      }
		    ],
		    
- These changes will bundle all CSS and write it into a memory based CSS bundle file.
- The dest/index.html file will contain this element in its head.

		<link href="style.bundle.css" rel="stylesheet">