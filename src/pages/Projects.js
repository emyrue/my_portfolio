import screenshot1 from '../images/screenshots/computer-image1.png';
import '../style/projects.css';

function Projects() {
  let allProjects = [
    {
      title: "Project 1",
      technologies: ["JavaScript", "HTML", "CSS"],
      class_names: "project project-one",
      class_names_2: "project-image project-image-one",
      class_names_3: "project-info project-info-one",
      class_names_4: "project-title project-title-one",
      github_link: "",
      description: "My first project",
      screenshot: screenshot1,
    },
  ];
  return (
    <section id="projects-section">
      <h2 className="projects-heading">Projects</h2>
      {allProjects.map((project) => {
        return (
          <div className={project.class_names}>
            <img className={project.class_names_2} src={project.screenshot} />
            <div className={project.class_names_3}>
              <h3 className={project.class_names_4}>{project.title}</h3>
              <ul className="project-technologies">
                {project.technologies.map((technology) => {
                  return (<li>{technology}</li>);
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