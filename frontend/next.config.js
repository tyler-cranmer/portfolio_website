/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [process.env.BACKEND_HOST],
  },

};



// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'example.com',
//         port: '',
//         pathname: '/account123/**',
//       },
//     ],
//   },
// };