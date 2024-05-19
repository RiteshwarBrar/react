import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/html.svg";
import Java from "../assets/img/java2.svg";
import Python from "../assets/img/Python.svg";
import css from "../assets/img/css2.svg";
import js from "../assets/img/js.svg";
import c from "../assets/img/c.svg";
import TrackVisibility from 'react-on-screen';

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

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                        <TrackVisibility>
                        {({ isVisible}) =>    
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <h2>Tech Stack</h2>
                            </div>}
                        </TrackVisibility>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item" >
                                    <img src={c} alt="C"/>
                                    <h5>C</h5>
                                </div>
                                <div className="item">
                                    <img src={Java} alt="Java"/>
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={Python} alt="Python"/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="HTML"/>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="CSS"/>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={js} alt="JS"/>
                                    <h5>JavaScript</h5>
                                </div>
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}