/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor:{
				'primary': '#FFC24B',
				'secondary': '#EF4444'
			},
			textColor:{
				'primary': '#EF4444'
			}
		},
	},
	plugins: [],
};
