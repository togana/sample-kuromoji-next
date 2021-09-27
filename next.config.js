const debug = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: !debug ? '/sample-kuromoji-next/' : '',
}
