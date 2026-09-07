/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Don't auto-generate AGENTS.md/CLAUDE.md in the repo root.
  agentRules: false,
};

module.exports = nextConfig;
