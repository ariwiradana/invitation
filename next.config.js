/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Nama Undangan",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
