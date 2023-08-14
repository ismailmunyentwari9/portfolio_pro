import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These skills collectively embody my commitment to innovation, excellence, and pragmatic solutions. I am poised to harness this expertise to contribute meaningfully to projects that demand a blend of technical prowess and creative vision. If you're seeking a collaborator who can navigate the intricacies of the digital landscape, I look forward to the opportunity to connect.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="CSS" />
                                <h5> Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="CSS" />
                                <h5> Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="JavaSript" />
                                <h5>JavaSript</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="React" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="React" />
                                <h5>Ruby</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="React" />
                                <h5>Ruby on Rails</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="React" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="React" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="React" />
                                <h5> SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="React" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="React" />
                                <h5>MySQL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
