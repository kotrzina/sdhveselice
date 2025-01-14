/** @type {import('next').NextConfig} */
module.exports = {
    output: "export",
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        loader: "imgix",
        path: "https://noop/",
    },
}
