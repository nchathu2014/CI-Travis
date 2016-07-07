var path = require('path');
var webpack = require("webpack");
var TimestampWebpackPlugin = require("timestamp-webpack-plugin");


module.exports ={
    context:path.resolve("src"), //create relative root directory fot the 'entry'
    entry:{
        main:"./main.js"
    },
    output:{
        path:"dist",
        publicPath:"scripts",  //tel the web server to lookup the bundle.js(index.html path to bundle)
        filename:"[name]-bundle.js"
    },
    plugins:[
        new webpack.ProvidePlugin({  //global the jQuery object everywhere along the project
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        }),

        new TimestampWebpackPlugin({
            path:__dirname,
            filename:"timestamp.json"
        }),

        new webpack.BannerPlugin("####################################\n Author:T.D.Nuwan Chathuranga\n####################################")
    ],
    module:{

        preLoaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"jshint-loader"
            }
        ],
        loaders:[
            {test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"},
            {test:/\.css$/,exclude:/node_modules/,loader:"style-loader!css-loader"},
            {test:/\.scss$/,exclude:/node_modules/,loader:"style-loader!css-loader!autoprefixer-loader!sass-loader"},
            {test:/\.less$/,exclude:/node_modules/,loader:"style-loader!css-loader!autoprefixer-loader!less-loader"},
            {test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            {test:/\.(png|jpg|eot|ttf)$/,exclude:/node_modules/,loader:"url-loader?limit=1000"}
        ]
    },

    devServer:{
      contentBase:"dist"
    },

    resolve:{
        extensions:['','.js','.jsx','.es6']
    },
    watch:true
};