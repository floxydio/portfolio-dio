/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		NEXT_PUBLIC_GITHUB_TOKEN: process.env.GH_TOKEN,
		NEXT_PUBLIC_VC_TOKEN: process.env.VC_TOKEN,
	},
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		// mdxRs: true,
	},
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"github.com",
			"raw.githubusercontent.com",
		],
	},
};

export default (nextConfig);
