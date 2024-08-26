/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // React Strict Mode 설정
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
    domains: ['pojangkimpop.github.io'], // 사용할 도메인 설정 (도메인 이름만 입력)
  },
  assetPrefix: '', // 배포 경로 설정
  basePath: '', // 애플리케이션의 기본 경로를 설정합니다.
  webpack: (config) => {
    // Markdown 파일을 raw-loader를 사용하여 처리합니다.
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    // SVG 파일을 @svgr/webpack을 사용하여 처리합니다.
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
