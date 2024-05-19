import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from '../assets/img/intern.JPG';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer.", "App Developer.", "Software Engineer."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker)};
    }, [text, delta])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        
        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        
        else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
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
                            <h2>Full-Stack Developer</h2>
                            <p>
                            I like to create solutions to ongoing problems with my innovation and technical accumen.
                            I am good at problem solving as I like to break each one down to smaller bits which helps me find a solution that seems out of the box initially.</p>
                            
                            <p> Here is a quote that resonates with me:</p>
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