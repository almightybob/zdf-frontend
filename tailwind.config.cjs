const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['quicksand', ...defaultTheme.fontFamily.sans],
				body: [...defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: [require('daisyui')]
};
