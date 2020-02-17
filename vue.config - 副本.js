const Timestamp = new Date().getTime();
module.exports = {
	// 基本路径
	publicPath: './',
	outputDir: 'dist', // 打包后文件夹名字
	productionSourceMap: false, // 是否生成map映射文件
	devServer: {
		proxy: 'http://nodejs999.com'
	},
	css: {
		// 是否使用css分离插件 ExtractTextPlugin
		extract: {
			//[chunkhash:8]
			//一种方式，打包后的css 会带版本号，不改变文件名的。
			filename: 'assets/css/[name].css?v=' + Timestamp,
			chunkFilename: 'assets/css/[name].css?v=' + Timestamp
		}
	},
	chainWebpack: config => {
		config.module
		.rule('images')
		.test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
		.use('url-loader')
		.loader('url-loader')
		.tap(options => {
			// 修改它的选项...
			options.fallback.options.name = 'assets/img/[name].[ext]?v=' + Timestamp; //去除图片hash
			options.limit = 1024; //这是字节(Byte)限制，1KB = 1024Byte ,当图片的大小小于 1KB ,则会被转为 base64格式，打包进js文件，大于1KB,则会被打包进 img 文件夹，供链接请求获取。
			return options
		});
	},
	configureWebpack: { // webpack 配置
		output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
			filename: 'assets/js/[name].js?v=' + Timestamp,
			chunkFilename: 'assets/js/[name].js?v=' + Timestamp
		}
	}
}