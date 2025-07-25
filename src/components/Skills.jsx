import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiPhp, SiMysql, SiJquery, SiBootstrap, SiLaravel, SiPython 
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "jQuery", icon: SiJquery, color: "#0769AD" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: FaGitAlt, color: "#F1502F" },
];

const Skills = () => (
  <section
    id="skills"
    className="bg-gray-900 p-6 rounded-lg shadow-lg  mb-10 max-w-5xl mx-auto scroll-mt-[88px]"
    style={{ scrollMarginTop: "100px" }}
  >
    <motion.h2
      className="text-white text-3xl mb-6 text-center"
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      Skills
    </motion.h2>

    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      {skills.map(({ name, icon: Icon, color }) => (
        <div
          key={name}
          className="bg-gray-800 rounded-md flex flex-col items-center p-6  hover:bg-gray-700 transition cursor-pointer"
          title={name}
        >
          <Icon style={{ color }} className="text-5xl mb-3" />
          <span className="text-white text-lg">{name}</span>
        </div>
      ))}
    </motion.div>
  </section>
);

export default Skills;
