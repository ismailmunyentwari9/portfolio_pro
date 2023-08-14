import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <a class="btn btn-primary mt-5" href ={link}><span>Live Demo </span></a>
          
        </div>
      </div>
    </Col>
  )
}
