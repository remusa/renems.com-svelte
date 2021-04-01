const tailwindcss = require('@tailwindcss/jit')
const nested = require('postcss-nested')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
	plugins: [
		// Some plugins, like postcss-nested, need to run before Tailwind

		nested,

		tailwindcss,

		// But others, like autoprefixer, need to run after

		autoprefixer,

		!dev &&
			cssnano({
				preset: 'default',
			}),
	],
}
