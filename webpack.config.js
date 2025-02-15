import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "node:path";
// const sveltePreprocess = require('svelte-preprocess');
import { sveltePreprocess } from 'svelte-preprocess';
const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);
export default {
	entry: {
		'build/bundle': ['./src/main.ts']
	},
	resolve: {
		extensions: ['.mjs', '.js', '.ts', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main'],
		conditionNames: ['svelte', 'browser']
	},
	output: {
		path: path.join(__dirname, '/public'),
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						compilerOptions: {
							dev: !prod
						},
						emitCss: prod,
						hotReload: !prod,
						preprocess: sveltePreprocess({ sourceMap: !prod })
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	devtool: prod ? false : 'source-map',
	devServer: {
		hot: true,
		static: {
			directory:  path.join(__dirname, '/public'),
		}
	}
};