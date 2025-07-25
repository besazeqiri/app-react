import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Fitness Studio",
    description:
      "A responsive website for a fitness studio with sections like classes, trainers, membership, and contact. Built with HTML, CSS, and Bootstrap.",
    link: "https://github.com/besazeqiri/Fitness-Studio",
    image: "/fitness-studio.png",
  },
  {
    id: 2,
    title: "Library",
    description:
      "A library management system with PHP and MySQL where users can view available books, borrow, and return them. Admin panel included for managing books and users.",
    link: "https://github.com/besazeqiri/Bibloteka",
    image: "/library.png",
  },
  {
    id: 3,
    title: "Restaurant",
    description:
      "Modern restaurant website with menu, reservation form, contact page, and a gallery. Fully responsive and built using HTML, CSS, JavaScript, and Bootstrap.",
    link: "https://github.com/besazeqiri/Restaurant",
    image: "/restaurant.png",
  },
  {
    id: 4,
    title: "Shop",
    description:
      "An online clothing shop with product listing, shopping cart, and checkout system. Developed with HTML, CSS, PHP, and MySQL for full-stack functionality.",
    link: "https://github.com/besazeqiri/Clothes-Shop",
    image: "/shop.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-12 px-6 rounded-lg shadow-lg  max-w-7xl mx-auto mb-10 scroll-mt-20"
      style={{ scrollMarginTop: "100px" }} // për scroll të saktë
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map(({ id, title, description, link, image }) => (
          <motion.div
            key={id}
            className="bg-gray-800 rounded-md p-4 border border-gray-700 shadow-md hover:shadow-gray-500 transition cursor-pointer"
            onClick={() => window.open(link, "_blank")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") window.open(link, "_blank");
            }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: id * 0.1 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-50 object-cover rounded-md mb-4 border border-gray-600"
            />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
            <span className="mt-4 inline-block text-indigo-400 hover:text-indigo-600 transition">
              View on GitHub &rarr;
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://github.com/besazeqiri"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
