/**
 * Created by yangtaofeng on 2016/11/23.
 */
module.exports = {
    entry:'./client/main.js',
    output:{
        path:'./client/build',
        filename:'build.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                query:{
                    presets:['es2015']
                }
            },
            {
                test:/\.vue$/,
                loader:'vue',
                exclude:/node_modules/
            }
        ]
    },

    resolve:{
        extensions:['','.js','.vue']
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }

        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}