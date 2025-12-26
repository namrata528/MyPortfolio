import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { profile, skills } from "../constants.js";

const Hero = () => {
  const [altTheme, setAltTheme] = useState(false);
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const skillList = [
    ...skills.programming,
    ...skills.frontend,
    ...skills.database,
    ...skills.versionControl,
    ...skills.softSkills,
  ];
  const bgClass = altTheme ? "gradient-bg-alt" : "gradient-bg";
  return (
    <section className={`relative w-full h-screen mx-auto ${bgClass}`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m{" "}
              <motion.span
                className="text-shimmer inline-block"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {profile.name}
              </motion.span>
            </h1>
            <p className={`${styles.heroSubText} mt-2`}>
              Turning ideas into reliable software with Python, Web, and MySQL
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={profile.resumeFile}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-6 py-3 rounded-xl shadow-soft hover:opacity-90 transition"
              >
                Download Resume
              </a>
              <button
                type="button"
                onClick={() => setAltTheme((v) => !v)}
                className="inline-block bg-white/10 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition"
              >
                Switch Theme
              </button>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/10 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/10 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="relative bg-white/5 rounded-2xl p-8 overflow-hidden"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `radial-gradient(400px circle at ${spot.x}px ${spot.y}px, rgba(124,58,237,0.25), transparent 60%)`,
                }}
              />
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 bg-accent blur-3xl opacity-30 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className="flex flex-wrap gap-3">
                {skillList.map((s, i) => (
                  <motion.span
                    key={s + i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full bg-white/10 text-white text-sm ring-1 ring-white/10"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
