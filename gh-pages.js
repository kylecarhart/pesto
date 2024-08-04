import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/kylecarhart/pesto.git', // Update to point to your repository
		user: {
			name: 'Kyle Carhart', // update to use your name
			email: '77036988+kylecarhart@users.noreply.github.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
