/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        loader: "imgix",
        path: "https://noop/",
    },
}
