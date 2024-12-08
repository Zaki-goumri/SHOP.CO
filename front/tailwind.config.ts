import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      screens: {
        '2xs': '320px',
        'xs': '425px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/Rectangle 2.jpg')",
        'footer-texture': "url('/images/footer-texture.png')",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
