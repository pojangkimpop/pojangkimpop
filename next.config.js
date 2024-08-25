/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['https://pojangkimpop.github.io/'], // 사용할 도메인 설정
  },
  assetPrefix: '/my-app/', // 배포 경로 설정
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md/,
      use: 'raw-loader',
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
