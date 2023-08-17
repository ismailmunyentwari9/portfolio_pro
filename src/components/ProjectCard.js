import React, { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, github, more }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p><span class="stack">Stack: </span>{description}</p>
         
          <button className="btn btn-light" onClick={toggleMore}>
            {showMore ? "Close" : "Read Project Summary..."}
          </button>
          {showMore && <p class="more-info">{more}</p>}
          <div className="project-links">
            <a className="btn btn-primary mt-1" href={link} target="_blank" rel="noreferrer">
              <span>See Live <i className="fas fa-external-link-alt"></i></span>
            </a>
            <a className="btn btn-primary mt-1" href={github} target="_blank" rel="noreferrer">
              <span>See Source <i className="fab fa-github"></i></span>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
