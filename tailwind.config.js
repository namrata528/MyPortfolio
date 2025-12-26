/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b1026",
        secondary: "#a6b1e1",
        accent: "#7c3aed",
        muted: "#94a3b8",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(124,58,237,0.35)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.35) 0%, transparent 60%), radial-gradient(800px 400px at 90% 30%, rgba(56,189,248,0.25) 0%, transparent 60%)",
        "hero-gradient-emerald":
          "radial-gradient(1200px 600px at 15% 15%, rgba(16,185,129,0.35) 0%, transparent 60%), radial-gradient(800px 400px at 85% 35%, rgba(59,130,246,0.25) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};
