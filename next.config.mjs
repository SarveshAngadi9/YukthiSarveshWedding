const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export
  images: {
    unoptimized: true, // required for GitHub Pages
  },
  basePath: isProd ? "/WeddingWebsite" : "",
  assetPrefix: isProd ? "/WeddingWebsite/" : "",
};

export default nextConfig;