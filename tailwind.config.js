/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			backgroundImage: {
				"floral-pattern": "url('/floral-pattern.webp')",
			},
		},
	},
	plugins: [],
};
