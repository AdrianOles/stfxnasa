/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.gifer.com",
      "i.pinimg.com",
      "media2.giphy.com",
      "cdn.freebiesupply.com",
      "assets.stickpng.com"
    ]
  }
}

module.exports = nextConfig
