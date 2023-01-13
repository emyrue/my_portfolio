import screenshot1 from '../images/screenshots/computer-image1.png';
import '../style/projects.css';

function Projects() {
  let allProjects = [
    {
      title: "Project 1 Name Goes Here",
      technologies: ["JavaScript", "HTML", "CSS"],
      class_name_number: "one",
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
          <div className={"project project-" + project.class_name_number}>
            <img alt="screenshot" className={"project-image project-image-" + project.class_name_number} src={project.screenshot} />
            <div className={"project-info project-info-" + project.class_name_number}>
              <h3 className={"project-title project-title-" + project.class_name_number}>{project.title}</h3>
              <ul className={"project-technologies project-technologies-" + project.class_name_number}>
                {project.technologies.map((technology) => {
                  return (<li className={"project-technology project-technology-one" + project.class_name_number}>{technology}</li>);
                })}
              </ul>
              <button className={"see-project see-project-" + project.class_name_number}>See This Project →</button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Projects;