# Webpack Development-server

- We will add the ability for Webpack to launch a local web server.

		npm install webpack-dev-server
		
- Edit webpack.config.js to tell the server to treat the dest/ folder as its root.

		  devServer: { contentBase: paths.DEST }
		  
- Edit package.json to run the webpack server.
			
			"scripts": {
				"build": "webpack -d --watch",
				"serve": "webpack-dev-server"
			},
			
- Run the new script

		npm run serve.
		
- Open **http://localhost:8080/** in a browser to view dest/index.html