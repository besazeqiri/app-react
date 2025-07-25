import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-gray-900 px-6 py-12 rounded-lg shadow-lg max-w-5xl mx-auto text-white scroll-mt-20"
    >
      <motion.h2
        className="text-4xl mb-8 font-semibold text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="text-left text-gray-300 leading-relaxed text-lg space-y-4"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
     <p>
      I’m Besa Zeqiri, a dedicated web developer skilled in HTML, CSS, JavaScript, and more. I specialize in creating dynamic, responsive web applications that deliver outstanding user experiences.
    </p>

    <p className="mt-4">
      I have strong problem-solving skills and continuously work to sharpen them while staying up to date with the latest web technologies. My commitment to quality has helped me contribute meaningfully to various projects, driving my growth and pushing the boundaries of web development.
    </p>

    <p className="mt-4">
      Learning new technologies and tackling complex challenges motivates me. I strive to build smart, scalable solutions that stand the test of time.
    </p>

    <p className="mt-4">
      I believe clear communication and collaboration are key to successful projects. Whether working independently or in a team, I focus on delivering results that meet client needs and exceed expectations.
    </p>

    <p className="mt-4">
      Outside of coding, I stay curious about emerging tools and frameworks, always exploring ways to improve efficiency and code quality.
    </p>

      </motion.div>
    </section>
  );
};

export default About;
