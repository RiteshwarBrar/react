import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/html.svg";
import Java from "../assets/img/java2.svg";
import Python from "../assets/img/Python.svg";
import css from "../assets/img/css2.svg";
import js from "../assets/img/js.svg";
import c from "../assets/img/c.svg";
import react from "../assets/img/react-2.svg";
import twilio from "../assets/img/twilio.svg";
import monga from "../assets/img/monga.svg";
import node from "../assets/img/node.svg";
import pytorch from "../assets/img/pytorch.svg";
import open from "../assets/img/open.svg";
import postman from "../assets/img/postman.svg";
import apica from "../assets/img/apica.svg";
import grafana from "../assets/img/grafana.svg";
import mySQL from "../assets/img/sql.svg";
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
            items: 4
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
                            <h2>Languages and Technologies</h2>
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
                                <div className="item">
                                    <img src={react} alt="react"/>
                                    <h5>React.js</h5>
                                </div>
                                <div className="item">
                                    <img src={twilio} alt="Twilio"/>
                                    <h5>Twilio</h5>
                                </div>
                                <div className="item">
                                    <img src={monga} alt="MongoDB"/>
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={mySQL} alt="MySQL"/>
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={node} alt="Node"/>
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src={grafana} alt="Graph"/>
                                    <h5>Grafana</h5>
                                </div>
                                <div className="item">
                                    <img src={apica} alt="Apica"/>
                                    <h5>Apica</h5>
                                </div>
                                <div className="item">
                                    <img src={postman} alt="Postman"/>
                                    <h5>Postman</h5>
                                </div>
                                <div className="item">
                                    <img src={open} alt="OpenCV"/>
                                    <h5>OpenCV</h5>
                                </div>
                                <div className="item">
                                    <img src={pytorch} alt="PyTorch"/>
                                    <h5>PyTorch</h5>
                                </div>
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}