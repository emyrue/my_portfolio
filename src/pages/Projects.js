function Projects() {
  let allProjects = [
    {
      title: "Project 1",
      technologies: ["JavaScript", "HTML", "CSS"],
      class_names: "project project-one",
      class_names_2: "project-info project-info-one",
      github_link: "",
      description: "My first project",
      screenshot: "",
    },
  ];
  return (
    <section id="projects-section">
      <h2 className="projects-heading">Projects</h2>
      {allProjects.map((project) => {
        return (
          <div className={project.class_names}>
            <div className={project.class_names_2}>
              <h3 className="project-title">{project.title}</h3>
              <ul className="project-technologies">
                {project.technologies.map((technology) => {
                  <li>{technology}</li>
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Projects;