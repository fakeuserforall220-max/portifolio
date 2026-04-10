const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['acade-me.vercel.app', 'simats-seat-sync.vercel.app', 'expensa-five.vercel.app', 'safethelock.vercel.app', 'elvera-navy.vercel.app', 'go-rail-india.vercel.app', 'astra-self.vercel.app'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
