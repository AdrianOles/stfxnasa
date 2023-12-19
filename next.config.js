/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.gifer.com",
      "i.pinimg.com",
      "media2.giphy.com",
      "cdn.freebiesupply.com",
      "assets.stickpng.com",
      "www.pcworld.com",
      "www.ebuyer.com"
    ]
  }
}

module.exports = nextConfig
