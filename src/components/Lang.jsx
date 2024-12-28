import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";

const tools = [
  {
    id: 1,
    name: "React",
    icon: <FaReact className="text-5xl text-blue-500" aria-label="React" />,
  },
  {
    id: 2,
    name: "Node.js",
    icon: <FaNodeJs className="text-5xl text-green-500" aria-label="Node.js" />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: (
      <SiJavascript
        className="text-5xl text-yellow-500"
        aria-label="JavaScript"
      />
    ),
  },
  {
    id: 4,
    name: "HTML5",
    icon: <FaHtml5 className="text-5xl text-orange-500" aria-label="HTML5" />,
  },
  {
    id: 5,
    name: "CSS3",
    icon: <FaCss3Alt className="text-5xl text-blue-600" aria-label="CSS3" />,
  },
  {
    id: 6,
    name: "MongoDB",
    icon: (
      <SiMongodb className="text-5xl text-green-600" aria-label="MongoDB" />
    ),
  },
  {
    id: 7,
    name: "GitHub",
    icon: <FaGithub className="text-5xl text-gray-800" aria-label="GitHub" />,
  },
  {
    id: 8,
    name: "PostgresSql",
    icon: (
      <SiPostgresql
        className="text-5xl text-blue-800"
        aria-label="PostgresSql"
      />
    ),
  },
  {
    id: 9,
    name: "Postman",
    icon: (
      <SiPostman className="text-5xl text-orange-400" aria-label="Postman" />
    ),
  },
];

const LanguagesAndTools = () => {
  return (
    <section
      id="languages-tools"
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          Languages & Tools
        </h2>
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              aria-label={tool.name}
            >
              {tool.icon}
              <p className="mt-4 text-lg font-medium text-gray-800">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesAndTools;
