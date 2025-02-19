/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["workoscdn.com"],
    },
    webpack: (config, { isServer }) => {
        // Disable CSS minification to work around cssnano issues
        config.optimization.minimize = false;
        return config;
    },
};

export default nextConfig;