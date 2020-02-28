
module.exports = {
	siteMetadata: {
		site_url: '/'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-plugin-catch-links',
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: '/',
				stripQueryString: true,
			}
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: '',
				head: true
			}
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				showSpinner: false
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Gatsby',
				short_name: 'Gatsby',
				start_url: '/',
				display: 'minimal-ui',
				icons: [
					{
						src: '/favicon/logo-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/favicon/logo-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		}
	]
};
