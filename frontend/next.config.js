/** @type {import('next').NextConfig} */

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: [process.env.BACKEND_HOST],
//   },

// };

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'django-portolio-assets-teewhy.s3.amazonaws.com',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
};
