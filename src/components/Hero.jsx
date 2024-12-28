import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-center text-white">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-extrabold md:text-6xl leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-blue-500">Tareq Izmirli</span>
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I am a passionate Full-Stack Developer skilled in designing, building,
        and maintaining front-end and back-end applications. Proficient in
        JavaScript, React, Node.js, Express, and database technologies, I aim to
        create scalable and efficient software solutions.
      </motion.p>

      {/* Animated Call to Action Button */}
      <motion.a
        href="contact"
        className="inline-block px-8 py-3 mt-6 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Me
      </motion.a>
    </section>
  );
};

export default Hero;
