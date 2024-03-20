/** @type {import('next').NextConfig} */

const { protocol, hostname, port } = new URL(
	process.env.NEXT_PUBLIC_WORDPRESS_API_URL + "/graphql",
);

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: protocol.slice(0, -1),
				hostname,
				port,
				pathname: "/wp-content/uploads/**"
			},
		],
	},
};