import { Container, Nav, Tab, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import web1 from "../assets/img/web1.png";
import web2 from "../assets/img/web2.png";
import web3 from "../assets/img/web3.png";
import projImg2 from "../assets/img/dead.png";
import projImg3 from "../assets/img/dead.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
    const project1 = [
        {
            title: "Portfolio Website",
            description: "HTML/CSS & React.js",
            imgUrl: web1,
        },
        {
            title: "Portfolio Website",
            description: "HTML/CSS & React.js",
            imgUrl: web2,
        }
        // {
        //     title: "Portfolio Website",
        //     description: "HTML/CSS & React.js",
        //     imgUrl: web3,
        // },
       
    ];
    const project2 = [
        {
            title: "Facial recognition",
            description: "Python & OpenCV",
            imgUrl: projImg2,
        },
        {
            title: "Facial recognition",
            description: "Python & OpenCV",
            imgUrl: projImg2,
        }
        // {
        //     title: "Facial recognition",
        //     description: "Python & OpenCV",
        //     imgUrl: projImg2,
        // },
       
    ];
    const project3 = [
        {
            title: "Balance Sheet",
            description: "Flutter",
            imgUrl: projImg3,
        },
        {
            title: "Balance Sheet",
            description: "Flutter",
            imgUrl: projImg3,
        }
        // {
        //     title: "Balance Sheet",
        //     description: "Flutter",
        //     imgUrl: projImg3,
        // },
       
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible}) =>    
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h1>Projects</h1>
                        </div>}
                    </TrackVisibility>
                                    <br></br>
                                    <br></br>
                                    <h2>Pill Pal</h2>
                                    <h6><span>Uses: </span>HTML, CSS, JavaScript, Twilio, MongoDB and Node.js</h6>
                                    <br></br>
                                    <p>Pill Pal was a project made by me and three other students during MadHacks 2023.<br></br>
                                        The inspiration for this app arose from the ongoing issue of people forgetting to take their medication due to age or other medical issues.
                                        Pill Pal is a web application that allows users to set reminders for their medication and helps them to keep track of their medication intake.
                                        The app can also send real-time text messages to the user's phone as a reminder for them to take their medication. 
                                    </p>
                                    
                                    <Row>
                                        <Col></Col>
                                        <Col><h4>github</h4></Col>
                                        <Col><h4>devpost </h4></Col>
                                        <Col></Col>
                                    </Row>
                                    <br></br>
                                    
                                    
                                    {/* https://devpost.com/software/pill-pal-2svc61
                                     https://github.com/aprkr/Madhacks2023 */}
                                    
                                    
                                    
                                    <Row>
                                        {
                                            project1.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                        
                                    <br></br>
                                    <br></br>
                                    <h2>Personal Porfolio Website</h2>
                                    <h6><span>Uses: </span>HTML, CSS, React.js and JavaScript</h6>
                                    <br></br>
                                    <p>This is the website for my personal portfolio as a Computer Science major in his Juinor year. It basically shows what languages I know and some of the projects that I have made recently.</p>
                                    <p>Moreover, users can navigate through diffrent sections of the website or can visit my LinkedIn page as well as my GitHub profile just by the click of a button. Feel free to explore and experiment with the website.</p>
                                    <Row>
                                        {
                                            project1.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                
                                    
                                    <br></br>
                                    <br></br>
                                    <h2>Facial Recognition Application</h2>
                                    <h6><span>Uses: </span>Python and OpenCV</h6>
                                    <br></br>
                                    <p>This application uses a webcam or any other camera that is connected to the device to detect a face by matching the face markers with a preset and marks a face with a blue rectangle around it.</p>
                                    <p>Apart from that, the application uses a model, that has been trained using some pre-loaded photos, to match a face detected by the application with some data specific to a face.</p>
                                    <p> In other words, it recognises a face and displays particular information matching with the face.</p>
                                    <Row>
                                        {
                                            project2.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                    
                                    <br></br>
                                    <br></br>
                                    <h2>Balance Sheet App</h2>
                                    <h6><span>Uses: </span>and OpenCV</h6>
                                    <br></br>
                                    <p>This app provides a solution to a realtime problem prevelant among the farmers in my hometown. The system of lending out money and paying the farm workers in daily wages requires the farm owners to keep track of the money they owe and the money they are owed.</p>
                                    <Row>
                                        {
                                            project3.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}