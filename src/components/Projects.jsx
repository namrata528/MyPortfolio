import React, { useMemo, useState } from "react";
import { styles } from "../styles";
import { projects } from "../constants.js";
import SectionWrapper from "./SectionWrapper";

const Card = ({ name, description, tags, link }) => (
  <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition">
    <h3 className="text-white font-semibold text-[18px]">{name}</h3>
    <p className="text-muted mt-2 text-[14px]">{description}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={`${name}-${t}`}
          className="text-[12px] px-2 py-1 rounded-full bg-accent/20 text-accent"
        >
          #{t}
        </span>
      ))}
    </div>
    <div className="mt-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-white"
      >
        View repository →
      </a>
    </div>
  </div>
);

const Projects = () => {
  const allTags = useMemo(
    () =>
      Array.from(
        new Set(projects.flatMap((p) => p.tags))
      ),
    []
  );
  const [activeTag, setActiveTag] = useState("");
  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <>
      <p className={styles.sectionSubText}>Work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveTag("")}
          className={`px-3 py-2 rounded-full text-sm ${
            activeTag === "" ? "bg-accent text-white" : "bg-white/10 text-white"
          }`}
        >
          All
        </button>
        {allTags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActiveTag(t)}
            className={`px-3 py-2 rounded-full text-sm ${
              activeTag === t ? "bg-accent text-white" : "bg-white/10 text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-8 overflow-x-auto snap-x snap-mandatory flex gap-6 pb-4">
        {filtered.map((p) => (
          <div key={p.name} className="min-w-[300px] snap-center">
            <Card {...p} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
