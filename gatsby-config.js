const dotenv = require('dotenv')

if (process.env.ENVIRONMENT !== 'production') {
	dotenv.config()
}

module.exports = {
	siteMetadata: {
		baseUrl: 'https://rockstarlifestyle.nl',
		title: `Rockstar Lifestyle`,
		description: `Description`,
		author: `@tijsluitse`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				useMozJpeg: false,
				stripMetadata: true,
				defaultQuality: 100
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.SPACE_ID,
				accessToken: process.env.DELIVERY_ACCESS_TOKEN
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`
			}
		},
		`gatsby-plugin-netlify`,
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images/
				}
			}
		},
		{
			resolve: `gatsby-source-instagram`,
			options: {
				username: `rockstarlifestyleamsterdam`,
				access_token: `8506566196.1677ed0.b80d4fd018ee426f8c002198c1d74a1a`,
				instagram_id: `1481082465`,
				maxPosts: 30
			}
		},
		{
			resolve: `gatsby-source-instagram`,
			options: {
				type: `hashtag`,
				hashtag: `rockstarlifestyle`
			}
		},
		{
			resolve: `gatsby-source-instagram`,
			options: {
				type: `hashtag`,
				hashtag: `amsterdam`
			}
		}
	]
}