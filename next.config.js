/** @type {import('next').NextConfig} */

// Polyfill for Node 22/25 global.localStorage crashing Next.js dev overlay
if (typeof globalThis.localStorage !== "undefined" && !globalThis.localStorage.getItem) {
  globalThis.localStorage.getItem = () => null;
  globalThis.localStorage.setItem = () => {};
  globalThis.localStorage.removeItem = () => {};
}

const nextConfig = {
  reactStrictMode: true,
  devIndicators: false, // Fix Node 25 + Next.js 15 bug with localStorage
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
