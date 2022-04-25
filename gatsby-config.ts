import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Wheel Spin`,
    description: "🎡 A fun tool for deciding things.",
    siteUrl: `https://www.wheelspin.dev`,
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-react-helmet"],
};

export default config;

