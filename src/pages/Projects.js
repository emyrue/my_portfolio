function Projects() {
  let allProjects = [
    {
      title: "Project 1",
      technologies: ["JavaScript", "HTML", "CSS"],
      class_names: "project project-one",
      class_names_2: "project-info project-info-one",
      class_names_3: "project-image project-image-one",
      class_names_4: "project-blue project-blue-one",
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
            <img className={project.class_names_3} src={project.screenshot} />
            <div className={project.class_names_4}>
              <div className={project.class_names_2}>
                <h3 className="project-title">{project.title}</h3>
                <ul className="project-technologies">
                  {project.technologies.map((technology) => {
                    return (<li>{technology}</li>);
                  })}
                </ul>
              </div>
              <button>See this project</button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Projects;