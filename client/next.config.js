/** @type {import('tailwindcss').Config} */
const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/login": { page: "/login" },
      "/register": { page: "/register" },
    };
  },
  reactStrictMode: false,
  // ACCEPTE URL IMAGE WEBSITE
  images: {
    disableStaticImages: true, // FOR CORDOVA BUILD, ACTIVATE THIS IF YOU WANT TO USE CORDOVA
    unoptimized: true, // FOR CORDOVA BUILD, ACTIVATE THIS IF YOU WANT TO USE CORDOVA
    domains: ["images.unsplash.com", "fastly.picsum.photos"],
  },
};
module.exports = nextConfig;
