import React from "react";
import { styles } from "../styles";
import { education } from "../constants.js";
import SectionWrapper from "./SectionWrapper";

const Education = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Education</p>
      <h2 className={styles.sectionHeadText}>Degrees.</h2>

      <div className="mt-8 space-y-6 border-l border-white/10 pl-6">
        {education.map((e, idx) => (
          <div
            key={idx}
            className="relative bg-white/5 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between before:absolute before:-left-[13px] before:top-6 before:w-3 before:h-3 before:bg-accent before:rounded-full"
          >
            <div>
              <h3 className="text-white font-semibold">{e.degree}</h3>
              <p className="text-muted">{e.school}</p>
            </div>
            <div className="text-right">
              <p className="text-muted">{e.years}</p>
              {e.cgpa && <p className="text-secondary">CGPA: {e.cgpa}</p>}
              {e.score && <p className="text-secondary">Score: {e.score}</p>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
