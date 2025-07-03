import type { NextConfig } from "next";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require("next-pwa")({
  dest: "public",
  disable: false,
  register: true,
});

const nextConfig: NextConfig = {};

module.exports = withPWA(nextConfig);
