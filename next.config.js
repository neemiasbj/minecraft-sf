/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"],
  },
};

// module.exports = withTM(nextConfig);
module.exports = nextConfig;
