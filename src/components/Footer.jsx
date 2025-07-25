import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <motion.footer
    className="bg-gray-950 text-gray-400 py-10 px-4 border-t border-gray-800 max-w-6xl mx-auto scroll-mt-16"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7 }}
  >
    {/* Horizontal divider above footer */}
    <hr className="border-gray-700 mb-8" />

    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
      {/* Left Side */}
      <motion.div
        className="text-center md:text-left"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <p className="text-white font-semibold text-lg">Besa Zeqiri</p>
        <p className="mt-1">Web Developer</p>
        <p className="mt-1">Prishtina, Kosovo</p>
      </motion.div>

      {/* Right Socials */}
      <motion.div
        className="flex gap-4 text-xl"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <a href="mailto:besaa.zeqirii@gmail.com" className="hover:text-white transition" aria-label="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/besazeqiri"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </motion.div>
    </div>

    <motion.p
      className="text-center text-xs text-gray-400 mt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay: 0.6, duration: 0.7 }}
    >
      © 2025 Besa Zeqiri. All rights reserved.
    </motion.p>
  </motion.footer>
);

export default Footer;
