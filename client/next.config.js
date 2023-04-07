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

      // Ajoutez d'autres routes ici si vous en avez
    };
  },
  reactStrictMode: false,
  // ACCEPTE URL IMAGE WEBSITE
  images: {
    disableStaticImages: true,
    unoptimized: true,

    domains: ["images.unsplash.com", "fastly.picsum.photos"],
  },
};
module.exports = nextConfig;
