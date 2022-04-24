import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `wheelspin`,
    siteUrl: `https://www.wheelspin.dev`,
  },
  plugins: ["gatsby-plugin-postcss"],
};

export default config;

