import React from "react";
import { styles } from "../styles";
import { profile } from "../constants.js";
import SectionWrapper from "./SectionWrapper";

const About = () => {
  return (
    <>
      <p className={styles.sectionSubText}>About me</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
      <p className="mt-6 text-muted text-[16px] max-w-3xl leading-[28px]">
        {profile.about}
      </p>
    </>
  );
};

export default SectionWrapper(About, "about");
