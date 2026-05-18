import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";
import { hostname } from "os";

const nextConfig: NextConfig = {
 images:{
  remotePatterns:[
   {
     protocol: "https",
      hostname : "i.pinimg.com"
   }
  ]
 }
  /* config options here */
};

export default withFlowbiteReact(nextConfig);