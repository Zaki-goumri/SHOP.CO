

const withPWA = require("@ducanh2912/next-pwa").default({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: "public",
  fallbacks: {
    document: "/offline", 
     },  
  workboxOptions: {
    disableDevLogs: true,
  },
  
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fr.louisvuitton.com'],  },

    
};


module.exports = withPWA(nextConfig);