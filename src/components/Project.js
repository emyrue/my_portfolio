import { useState, useEffect } from 'react';
import closePopup from '../images/close.svg';
import '../style/projectpopup.css';

function ProjectPopup(props) {
  const { array, index, show, closeProject } = props;
  const [projectIndex, setProjectIndex] = useState(index);

  useEffect(() => {
    setProjectIndex(index);
  }, [show])

  return (
    <section className={show ? "project-popup":"hide-project"} >
      <img className="popup-screenshot" alt="screenshot" src={array[projectIndex].screenshot} />
      <button onClick={() => {closeProject()}}>
        <img src={closePopup} alt="close" className="close-popup" />
      </button>
    </section>
  );
}

export default ProjectPopup;