import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 2,
    title: "Technical Support",
    company: "Hybrid Solutions",
    duration: "April 2022 - Present",
    description: [
      "Carrying out manual testing of new software releases and features.",
      "Provide excellent customer service to clients.",
      "Installing, virtualizing, testing, configuring, securing, troubleshooting, documenting, and supporting maintenance and operations of services and trading processes.",
      "Document outages and bugs in the outage tracking report.",
    ],
  },
  {
    id: 1,
    title: "HUAWEI MOBILE DEVICE",
    company: "Huawei",
    duration: "February 2019 - August 2020",
    description: [
      "Build and maintain strong, long-term relationships with clients by understanding their needs and providing guidance and information regarding products, and meeting target.",
      "Providing tailored product or service recommendations.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="mb-8 text-3xl md:text-4xl font-bold text-center">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3 className="text-2xl font-semibold text-blue-400">
                {experience.title}
              </h3>
              <p className="mt-1 text-lg text-gray-300">{experience.company}</p>
              <p className="mt-1 text-sm text-gray-400">
                {experience.duration}
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-200">
                {experience.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
