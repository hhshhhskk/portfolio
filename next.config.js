/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'prod-files-secure.s3.us-west-2.amazonaws.com',
            'www.notion.so',
            'images.unsplash.com',
        ], // 이미지 호스트 이름을 여기에 추가
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
}

module.exports = nextConfig
