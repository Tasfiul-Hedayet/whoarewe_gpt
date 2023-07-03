// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   dest: 'public',
//   
//   //register: true,
//   //skipWaiting: true,
//   //disable: process.env.NODE_ENV === 'development',
// });

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === 'development'
  disable: false,
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = withPWA(nextConfig)

