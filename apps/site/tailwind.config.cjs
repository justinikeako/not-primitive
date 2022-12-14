/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			display: ['Inter Display', 'sans-serif'],
			sans: ['Inter', 'sans-serif'],
			body: ['Inter', 'sans-serif']
		},

		fontSize: {
			sm: ['0.8rem', { lineHeight: '1.5', fontWeight: '400' }],
			base: ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
			lg: ['1.25rem', { lineHeight: '1.15', fontWeight: '600' }],
			xl: ['1.563rem', { lineHeight: '1.15', fontWeight: '600' }],
			'2xl': ['1.953rem', { lineHeight: '1.15', fontWeight: '600' }],
			'3xl': ['2.441rem', { lineHeight: '1.15', fontWeight: '900' }],
			'4xl': ['3.052rem', { lineHeight: '1.15', fontWeight: '900' }]
		},

		extend: {
			lineHeight: {
				tight: '1.15'
			},

			borderRadius: {
				sm: '0.5rem',
				DEFAULT: '0.75rem',
				lg: '1rem',
				xl: '1.5rem',
				'2xl': '2rem'
			}
		}
	}
};
