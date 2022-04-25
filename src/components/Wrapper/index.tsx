import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../../utils/hooks";
import Footer from "../Footer";

interface WrapperProps {
  children?: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { title, description, siteUrl } = useSiteMetadata();

  return (
    <div className="p-2 h-screen text-white">
      <Helmet>
        <title>
          {title} | {description}
        </title>
        <meta name="description" content={description} />
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <main className="min-h-screen">{children}</main>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Wrapper;

