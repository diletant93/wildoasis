import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'lfijklzpszkjdjzyuoco.supabase.co',
        port:'',
        pathname:'/storage/v1/object/public/cabin-images/**',
        search:''
      },
      {
        protocol:'https',
        hostname:'lh3.googleusercontent.com',
        pathname:'/a/**'
      }
    ]
  }
};

export default nextConfig;
