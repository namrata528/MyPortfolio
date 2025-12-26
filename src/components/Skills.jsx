import React from "react";
import { styles } from "../styles";
import { skills } from "../constants.js";
import SectionWrapper from "./SectionWrapper";

const List = ({ title, items }) => (
  <div className="bg-white/5 rounded-xl p-6">
    <h3 className="text-white font-semibold mb-3">{title}</h3>
    <ul className="text-muted grid grid-cols-2 gap-2">
      {items.map((i) => (
        <li key={i}>• {i}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Skills</p>
      <h2 className={styles.sectionHeadText}>Toolkit.</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <List title="Programming" items={skills.programming} />
        <List title="Frontend" items={skills.frontend} />
        <List title="Database" items={skills.database} />
        <List title="Version Control" items={skills.versionControl} />
        <List title="Data Tools" items={skills.dataTools} />
        <List title="Soft Skills" items={skills.softSkills} />
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/5 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-3">Python</h3>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-2 bg-accent rounded-full" style={{ width: "80%" }} />
          </div>
        </div>
        <div className="bg-white/5 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-3">Frontend</h3>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-2 bg-accent rounded-full" style={{ width: "70%" }} />
          </div>
        </div>
        <div className="bg-white/5 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-3">MySQL</h3>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-2 bg-accent rounded-full" style={{ width: "65%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
