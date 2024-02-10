/** @type {import("next").NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      cssProp: false
    }
  }
};

export default nextConfig;
