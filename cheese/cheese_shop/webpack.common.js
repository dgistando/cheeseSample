const uglify = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
      },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['env','react']
                    }
                }
            },{
            test:/\.css$/,
            //Webpack executes loaders in reverse order so css comes first. >:((
            use:['style-loader','css-loader']
            },{
            test:/\.(png|jpg|gif|svg|ico|jpeg|PNG|jpg_256)$/,
            use:[{
                    loader:'url-loader',
                    options : {
                        name: '[path][name].[ext]'
                    },
                }
            ]
        }]
    },
    plugins : [//handles code post download 
        new uglify()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
};