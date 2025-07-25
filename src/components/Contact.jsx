import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.section
    id="contact"
    className="bg-gray-900 p-6 rounded-lg shadow-lg mb-10 max-w-5xl mx-auto scroll-mt-20"
    style={{ scrollMarginTop: "100px" }}
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7 }}
  >
    <motion.h2
      className="text-white text-3xl mb-6 text-center"
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      Contact Me
    </motion.h2>

    <div className="flex flex-col lg:flex-row gap-8">
      <motion.div
        className="text-gray-300 space-y-4 lg:w-1/2"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div>
          <p className="font-semibold text-white">Address:</p>
          <p>Prishtina, Kosova</p>
        </div>
        <div>
          <p className="font-semibold text-white">Call Me:</p>
          <p>+383 XX XXX XXX</p>
        </div>
        <div>
          <p className="font-semibold text-white">Email:</p>
          <p>besaa.zeqirii@gmail.com</p>
        </div>
      </motion.div>

      <motion.form
        className="space-y-4 lg:w-1/2"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="4"
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-md transition w-full sm:w-auto">
          Send
        </button>
      </motion.form>
    </div>
  </motion.section>
);

export default Contact;
