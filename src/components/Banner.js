// Desc: Home page banner component
import { Col, Container, Row } from "react-bootstrap";
import headerImg from '../assets/img/intern.JPG';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible}) =>    
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <br></br>
                            <h1>Riteshwar Singh Brar</h1>
                            <h2>Developer</h2>
                            <p>
                            I enjoy creating solutions to ongoing problems with my innovation and technical acumen.
                            I have a knack for problem solving and I do so by breaking each one down to smaller bits. This helps me find a solution that initially seems out of the box.
                            Here is a quote that resonates with me:</p>
                            
                            <p>
                            “When you don't create things, you become defined by your tastes rather than ability. Your tastes only narrow & exclude people. so create.”
                            </p>
                            <p className="credit">-Why The Lucky Stiff
                            </p>
                            
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}