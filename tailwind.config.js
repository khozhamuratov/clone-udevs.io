/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '900px',
			xl: '1024px',
		},
		extend: {
			colors: {
				primary: '#1b5bf7',
				text_color: '#18191f',
				bgcolor: '#f4f7ff',
			},
		},
	},
	plugins: [],
}
