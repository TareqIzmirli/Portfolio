import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Job Search Web Application (Solo)",
    description:
      "Web App has two users: one for posting jobs and another for applying for them.",
    technologies: ["React", "Node.js", "Express", "JavaScript", "MongoDB"],
    repoLink: "https://github.com/C12-TareqIzmirli/MERAKI_Academy_Project_4",
  },
  {
    id: 2,
    name: "Local Trade Platform Web Application (Team)",
    description:
      "Online marketplace designed to facilitate the exchange of goods and services.",
    technologies: [
      "React",
      "JavaScript",
      "Postgres",
      "Express",
      "NodeJs",
      "Redux",
    ],
    repoLink: "https://github.com/TareqIzmirli/project5-forked",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 30px rgba(0, 0, 0, 0.4)",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="p-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="mt-4 text-gray-300">{project.description}</p>
              <div className="mt-6">
                <h4 className="font-medium text-gray-400">Technologies:</h4>
                <ul className="flex flex-wrap mt-2 gap-2">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="px-3 py-1 text-sm font-medium bg-gray-600 text-gray-200 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline hover:text-blue-300 transition-all"
                >
                  View GitHub Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
