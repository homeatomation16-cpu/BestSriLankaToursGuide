import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },

  experimental: {
    allowedDevOrigins: ["http://localhost:3000"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "woinupcbvkriufpyhwtm.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
      protocol: "https",
      hostname: "randomuser.me", // ✅ ADD THIS
    },
    {
      protocol: "https",
      hostname: "upload.wikimedia.org",
    },
    {
      protocol: "https",
      hostname: "taasl.lk",
    },
  
    ],
  },
};

export default nextConfig;
