import React from "react";
import { styles } from "../styles";
import { profile } from "../constants.js";
import SectionWrapper from "./SectionWrapper";

const Contact = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Get in touch</p>
      <h2 className={styles.sectionHeadText}>Contact.</h2>

      <div className="mt-8 grid sm:grid-cols-2 gap-6 bg-white/5 p-6 rounded-xl">
        <div>
          <h3 className="text-white font-semibold">Email</h3>
          <a
            className="text-secondary hover:text-white"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
        </div>
        <div>
          <h3 className="text-white font-semibold">Phone</h3>
          <a className="text-secondary hover:text-white" href={`tel:${profile.phone}`}>
            {profile.phone}
          </a>
        </div>
        <div>
          <h3 className="text-white font-semibold">LinkedIn</h3>
          <a
            className="text-secondary hover:text-white"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.linkedin}
          </a>
        </div>
        <div>
          <h3 className="text-white font-semibold">GitHub</h3>
          <a
            className="text-secondary hover:text-white"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.github}
          </a>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
