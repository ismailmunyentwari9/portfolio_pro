import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import transaction from "../assets/img/transaction.png";
import bookStore from "../assets/img/bookStore.png"
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
      github: "https://github.com/ismailmunyentwari9/transact_track",
      more: "TransactionTrack: Effortlessly record and track transactions for any item. Ideal for personal finances, business expenses, or tracking spending habits. Stay organized and informed with ease",
    },
    {
      title: "Book Store",
      description: "React.js & API",
      imgUrl: bookStore,
      link : "https://book-store-a99h.onrender.com/",
      github: "https://github.com/ismailmunyentwari9/book-store",
      more: "The Bookstore Project: Simplify inventory management with a user-friendly software. Easily add, edit, and remove books. Process orders and track sales data seamlessly.",
    },
    {
      title: "Math Magician",
      description: "React.js & API",
      imgUrl: mathMagician,
      link : "https://math-magicians-v6z8.onrender.com/",
      github: "https://github.com/ismailmunyentwari9/Math-magicians",
      more: "The Math Magician Project: Boost kids' math skills with interactive web-based learning. Solve fun math problems in a game-like environment.",
      
    },
    {
      title: "RideEase",
      description: "Ruby on Rails & React.js",
      imgUrl: RideEase,
      link : "https://rideease.onrender.com/",
      github: "https://github.com/shubhambhoyar077/rideease-backend",
      more: "RideEase: Book rides hassle-free! Reserve cars for your desired dates and cities. Enjoy a seamless and reliable car booking experience."
    },
    {
      title: "Final Space Characters",
      description: "React.js & API",
      imgUrl: FinalSpace,
      link : "https://final-space.onrender.com/",
      github: "https://github.com/ismailmunyentwari9/Final_Space_Character",
      more:"Final Space Wiki: Explore characters, episodes, and locations interactively with our React app powered by the Final Space API."
    },
    {
      title: "African women in Technology",
      description: "Html & JavaScript",
      imgUrl: AfricanWomen,
      link : "https://ismailmunyentwari9.github.io/My_capstone_project_001/index.html",
      github: "https://github.com/ismailmunyentwari9/African_Women_inTech",
      more:"African Women in Tech: Fostering Diversity Through Innovation. Introducing a groundbreaking initiative dedicated to promoting diversity within the tech industry."
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
