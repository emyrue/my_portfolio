import { useState } from 'react';
import ProjectPopup from '../components/Project';
import concertListing from '../images/screenshots/concert-listing.png';
import blogApp from '../images/screenshots/blog-app.png';
import transactions from '../images/screenshots/transactions.png';
import spaceTravelers from '../images/screenshots/space-travelers.png';
import mathMagicians from '../images/screenshots/mathmagicians.png';
import toDo from '../images/screenshots/todo.png';
import dots from '../images/dots.png';
import diamond from '../images/diamond.png';
import semicircle from '../images/semicircle.png';
import shapes from '../images/shapes.png';
import twosquares from '../images/twosquares.png';
import yellowtear from '../images/yellowtear.png';
import '../style/projects.css';

function Projects() {
  const [index, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const allProjects = [
    {
      title: 'Concert Listing Site',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      class_name_number: 'one',
      github_link: 'https://github.com/emyrue/ConcertListing',
      live_link: 'https://emyrue.github.io/ConcertListing/',
      description: 'A site showcasing my skills in HTML, CSS, and JavaScript. This responsive site displays music groups using a template by Cindy Shin.',
      screenshot: concertListing,
    },
    {
      title: 'Blog App',
      technologies: ['Ruby on Rails', 'CSS'],
      class_name_number: 'two',
      github_link: 'https://github.com/emyrue/BlogAppRails',
      live_link: '',
      description: 'A site that allows users to create, edit, and delete blog posts. Users can also comment on and like posts.',
      screenshot: blogApp,
    },
    {
      title: 'Transactions App',
      technologies: ['Ruby on Rails', 'CSS'],
      class_name_number: 'three',
      github_link: 'https://github.com/emyrue/TransactionsApp',
      live_link: '',
      description: 'This site allows the user to create categories as well as save transactions in those categories.',
      screenshot: transactions,
    },
    {
      title: "Space Travelers' Hub",
      technologies: ['JavaScript', 'React', 'Redux', 'CSS'],
      class_name_number: 'four',
      github_link: 'https://github.com/emyrue/SpaceTravelersHub',
      live_link: '',
      description: 'This is a site that contacts the Space Travelers Api to display information about rockets and missions. Users can also book rockets and join missions.',
      screenshot: spaceTravelers,
    },
    {
      title: 'Math Magicians',
      technologies: ['React', 'HTML', 'CSS'],
      class_name_number: 'five',
      github_link: 'https://github.com/emyrue/MathMagicians',
      live_link: 'https://62698423346f4e198a1d010a--lovely-praline-054af9.netlify.app/',
      description: 'This site is a react application with a calculator that allows users to perform basic math operations.',
      screenshot: mathMagicians,
    },
    {
      title: 'ToDo List App',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      class_name_number: 'six',
      github_link: 'https://github.com/emyrue/todo',
      live_link: 'https://emyrue.github.io/todo/',
      description: 'This site is a simple todo list app that allows users to add, edit, and delete tasks.',
      screenshot: toDo,
    },
  ];

  const handleClick = (projectIndex) => {
    setIndex(projectIndex);
    setShowPopup(!showPopup);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      {allProjects.map((project, i) => (
        <div key={i.to_s} className={`project project-${project.class_name_number}`}>
          <img alt="screenshot" className={`project-image project-image-${project.class_name_number}`} src={project.screenshot} />
          <div className={`project-info project-info-${project.class_name_number}`}>
            <h3 className={`project-title project-title-${project.class_name_number}`}>{project.title}</h3>
            <ul className={`project-technologies project-technologies-${project.class_name_number}`}>
              {project.technologies.map((technology, j) => (<li key={j.to_s} className={`project-technology project-technology-one${project.class_name_number}`}>{technology}</li>))}
            </ul>
            <button type="button" className={`see-project see-project-${project.class_name_number}`} onClick={() => handleClick(i)}>
              See This Project →
            </button>
          </div>
        </div>
      ))}
      <img className="project-geometry project-dots" alt="dots" src={dots} />
      <img className="project-geometry project-diamond" alt="diamond" src={diamond} />
      <img className="project-geometry project-semicircle" alt="semicircle" src={semicircle} />
      <img className="project-geometry project-shapes" alt="shapes" src={shapes} />
      <img className="project-geometry project-twosquares" alt="twosquares" src={twosquares} />
      <img className="project-geometry project-yellowtear" alt="yellowtear" src={yellowtear} />
      <ProjectPopup array={allProjects} index={index} show={showPopup} closeProject={handleClose} />
    </section>
  );
}

export default Projects;
