const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports ={
    entry: "./src/index.js",
    output:{
        path: path.join(__dirname+"/dist"),
        filename:"index_build.js"
    },
    module:{
        rules:[
            {
            test: /\.js$/,
            exclude : /node_modules/,
            use:{
                loader: "babel-loader"
                }
        },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template : "./public/index.html"  
        })
    ]
}