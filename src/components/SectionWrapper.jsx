import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const SectionWrapper = (Component, id) =>
  function Wrapped() {
    return (
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "spring", duration: 0.6 }}
        id={id}
        className={`${styles.padding} max-w-7xl mx-auto`}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
