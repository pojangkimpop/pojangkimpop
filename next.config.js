/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://pojangkimpop.github.io/'], // 사용할 도메인 설정
  },
  assetPrefix: '/my-app/', // 배포 경로 설정
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
