export const cssStyle = {
	demoTitle: {
		color: '#222',
		fontFamily: 'Helvetica, sans-serif',
		textShadow: '0 0 5px lightgray',
		lineHeight: '2',
		'& a': {
			transition: 'color 0.2s ease',
			color: 'palevioletred',
			'text-decoration': 'none',

			'&:hover': {
				color: '#888',
			},
		},
	},
};
