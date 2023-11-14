/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

module.exports = {
  async redirects() {
    return [
      {
        source: "/contact/:path*",
        destination: "/taehyeon202/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
