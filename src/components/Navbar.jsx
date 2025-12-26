import React, { useState, useEffect } from "react";
import { styles } from "../styles";

const links = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-white font-bold text-[18px]">
          Namrata <span className="text-secondary">| Portfolio</span>
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {links.map((l) => (
            <li key={l.id} className="text-muted hover:text-white text-[16px]">
              <a href={`#${l.id}`}>{l.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
