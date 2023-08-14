import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import transaction from "../assets/img/transaction.png";
import spaceTravel from "../assets/img/space travel.png";
import mathMagician from "../assets/img/Math magician.png";
import AfricanWomen from "../assets/img/african women.png";
import FinalSpace from "../assets/img/final space.png";
import RideEase from "../assets/img/after.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Transaction Truck",
      description: "Ruby on Rails & React.js",
      imgUrl: transaction,
      link : "https://transaction-truck.onrender.com/",
    },
    {
      title: "Space Travel",
      description: "React.js & API",
      imgUrl: spaceTravel,
      link : "https://space-travelers-hub-7yjv.onrender.com/",
    },
    {
      title: "Math Magician",
      description: "React.js & API",
      imgUrl: mathMagician,
      link : "https://math-magicians-v6z8.onrender.com/",
    },
    {
      title: "RideEase",
      description: "Ruby on Rails & React.js",
      imgUrl: RideEase,
      link : "https://rideease.onrender.com/"
    },
    {
      title: "Final Space Characters",
      description: "React.js & API",
      imgUrl: FinalSpace,
      link : "https://final-space.onrender.com/",
    },
    {
      title: "African women in Technology",
      description: "HTML & JavaScript",
      imgUrl: AfricanWomen,
      link : "https://ismailmunyentwari9.github.io/My_capstone_project_001/index.html",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to the heart of my portfolio – a curated collection of projects that encapsulate my passion for turning concepts into functional, impactful realities. Each project you'll explore here represents a journey of innovation, collaboration, and problem-solving, all brought to life through the artistry of software development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                  <a href="https://github.com/ismailmunyentwari9"><Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   <Nav.Item>
                      <Nav.Link eventKey="first">Check My Repo</Nav.Link>
                    </Nav.Item>
                  </Nav></a>
                </Tab.Container>
                
              </div>}

            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
