import { useState } from 'react';
import closePopup from '../images/close.svg';
import '../style/projectpopup.css';

function ProjectPopup(props) {
  const { array, index, show, closeProject } = props;
  const [projectIndex, setProjectIndex] = useState(index);
  return (
    <section className={show ? "project-popup":"hide-project"} >
      {index}
      <button onClick={() => {closeProject()}}>
        <img src={closePopup} alt="close" className="close-popup" />
      </button>
    </section>
  );
}

export default ProjectPopup;