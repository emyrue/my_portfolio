import { useState, useEffect } from 'react';
import closePopup from '../images/close.svg';
import githubLogo from '../images/github-logo.svg';
import live from '../images/live.png';
import previous from '../images/previous.png';
import next from '../images/next.png';
import '../style/projectpopup.css';

function ProjectPopup(props) {
  const { array, index, show, closeProject } = props;
  const [projectIndex, setProjectIndex] = useState(index);

  useEffect(() => {
    setProjectIndex(index);
  }, [index])

  return (
    <section className={show ? "project-popup":"hide-project"} >
      <button className="close-popup" onClick={() => {closeProject()}}>
        <img src={closePopup} alt="close" className="close-popup-image" />
      </button>
      <h3 className="popup-title">{array[projectIndex].title}</h3>
      <ul className="popup-technologies">
        {array[projectIndex].technologies.map((technology) => {
          return (<li className="popup-technology">{technology}</li>)
        })}
      </ul>
      <img className="popup-screenshot" alt="screenshot" src={array[projectIndex].screenshot} />
      <div className="popup-description">{array[projectIndex].description}</div>
      <div className="button-center">
        {array[projectIndex].live_link && <a href={array[projectIndex].live_link} target="_blank" rel="noreferrer">
          <button className="popup-github-button">
            <span>See live</span>
            <img alt="live" src={live} className="popup-github-logo" />
          </button>
        </a>}
        <a href={array[projectIndex].github_link} target="_blank" rel="noreferrer">
          <button className="popup-github-button">
            <span>See source</span>
            <img alt="github" src={githubLogo} className="popup-github-logo" />
          </button>
        </a>
      </div>
      <div className="previous-next">
        <button className="previous-button" onClick={() => setProjectIndex((projectIndex + 5) % 6)}>
          <img src={previous} alt="previous" className="previous-image" />
        </button>
        <button className="next-button" onClick={() => setProjectIndex((projectIndex + 1) % 6)}>
          <img src={next} alt="next" className="next-image" />
        </button>
      </div>
    </section>
  );
}

export default ProjectPopup;