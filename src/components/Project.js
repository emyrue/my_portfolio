import { useState } from 'react';

function ProjectPopup(props) {
  const { array, index } = props;
  const [projectIndex, setProjectIndex] = useState(index);
  return (
    <section className="project-popup"></section>
  );
}

export default ProjectPopup;