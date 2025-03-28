/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [],
	theme: {
		extend: {
			container: {
				center: true,
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			fontWeight: {
				w500: 500,
				w700: 700
			},
			colors: {
				primary: {
					cyan: 'hsl(180, 66%, 49%)',
					violet: 'hsl(257, 27%, 26%)',
				},
				secondary: {
					red: 'hsl(0, 87%, 67%)',
				},
				neutral: {
					gray: {
						100: 'hsl(0, 0%, 75%)',
						200: 'hsl(257, 7%, 63%)',
						300: 'hsl(255, 11%, 22%)',
						400: 'hsl(260, 8%, 14%)',
					},
				},
			},
		},
		plugins: [],
	},
}
