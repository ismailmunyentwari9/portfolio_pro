import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6} className="text-center text-sm-end">
             <div className="social-icon">
                <a href="https://www.linkedin.com/in/munyentwari-ismail/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/ismail.mn.35"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/ismail_0258/"><img src={navIcon3} alt="" /></a>
              </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
