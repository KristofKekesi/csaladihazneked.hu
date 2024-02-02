/** @type {import('next').NextConfig} */

const { protocol, hostname, port } = new URL(
	process.env.WORDPRESS_API_URL,
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