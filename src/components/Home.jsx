import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profile from "/profile.jpg";

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray text-white scroll-mt-[100px]"
    >
      <img
        src={profile}
        alt="Besa Zeqiri"
        className="w-60 h-60 rounded-full object-cover border-4 border-gray-700 shadow-lg"
      />

      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        Besa Zeqiri
      </motion.h1>

      <motion.p
        className="max-w-xl text-lg md:text-xl text-gray-300"
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Web Developer • Problem Solver • Technology Enthusiast
      </motion.p>

      <motion.a
        href="#projects"
        className="mt-10 inline-block bg-white text-black font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        See My Work
      </motion.a>
    </section>
  );
};

export default Home;
