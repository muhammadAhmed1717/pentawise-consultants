/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    // Serve AVIF first (smallest), then WebP.
    formats: ["image/avif", "image/webp"],
    // Optimised images are cached for 30 days on the server/CDN.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    // Static design assets are versioned by file name: cache them for a year.
    // If you replace an image, give the new file a new name.
    const longCache = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];
    return [
      { source: "/images/:path*", headers: longCache },
      { source: "/svg/:path*", headers: longCache },
    ];
  },
};

export default nextConfig;
