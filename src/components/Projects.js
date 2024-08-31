// Desc: This file contains the Projects component which is responsible for rendering the projects section of the portfolio.
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import shell1 from "../assets/img/shell1.png";
import shell2 from "../assets/img/shell2.png";
import load from "../assets/img/load.svg";
import bud1 from "../assets/img/bud1.png";
import det1 from "../assets/img/det1.png";
import det2 from "../assets/img/det2.png";
import bud2 from "../assets/img/bud2.png";
import chat1 from "../assets/img/chat1.png";
import chat2 from "../assets/img/chat2.png";
import pill1 from "../assets/img/pill1.png";
import pill2 from "../assets/img/twill.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Carousel from "react-multi-carousel";


export const Projects = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const project1 = [
        {
            title: "Work in progress",
            description: "",
            imgUrl: load
        },
        {
            title: "Work in progress",
            description: "",
            imgUrl: load
        }
       
    ];
    const project2 = [
        {
            title: "Facial recognition",
            description: "Python & OpenCV",
            imgUrl: det1,
        },
        {
            title: "Facial recognition",
            description: "Python & OpenCV",
            imgUrl: det2,
        }
       
    ];
    const project3 = [
        {
            title: "Custom Shell",
            description: "C in Linux",
            imgUrl: shell1,
        },
        {
            title: "Custom Shell",
            description: "C in Linux",
            imgUrl: shell2,
        }
       
    ];
    const project4 = [
        {
            title: "Pill Pal",
            description: "JavaScript, Twilio, MongoDB and Node.js",
            imgUrl: pill1
        },
        {
            title: "Pill Pal",
            description: "JavaScript, Twilio, MongoDB and Node.js",
            imgUrl: pill2
        }
       
    ];
    const project5 = [
        {
            title: "Badger Chatroom",
            description: "Javascript with React Native",
            imgUrl: chat1
        },
        {
            title: "Badger Chatroom",
            description: "Javascript with React Native",
            imgUrl: chat2
        }
       
    ];
    const project6 = [
        {
            title: "Badger Buddies",
            description: "Javascript with React.js",
            imgUrl: bud1
        },
        {
            title: "Badger Buddies",
            description: "Javascript with React.js",
            imgUrl: bud2
        }
       
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
                    <Carousel responsive={responsive} infinite={true} className="project-slider">
                            <div className="project-item" >
                                    
                                    <h2>Pill Pal</h2>
                                    <h6><span>Uses: </span>HTML, CSS, JavaScript, Twilio, MongoDB and Node.js</h6>
                                    <br></br>
                                    <p>Pill Pal was a project made by three other students and I during MadHacks 2023.<br></br>
                                        The inspiration for this app arose from the ongoing issue of people forgetting to take their medication due to age or other medical issues.
                                        Pill Pal is a web application that allows users to set reminders for their medication and helps them keep track of their medication intake.
                                        The app can also send real-time text messages to the user's phone as a reminder for them to take their medication. 
                                    </p>
                                    
                                    <Row>
                                        <Col></Col>
                                        <Col><h4><a href="https://github.com/aprkr/Madhacks2023"  target="_blank" rel="noreferrer" style={{ textDecoration:"none", color: "#3c9442", padding: "6px 12px",
  border: "2px solid #3c9442", "background-color": "#dfffdf"}}>GitHub</a></h4></Col>
                                        <Col><h4><a href="https://devpost.com/software/pill-pal-2svc61"  target="_blank" rel="noreferrer" style={{ textDecoration:"none", color: "#3c9442", padding: "6px 12px",
  border: "2px solid #3c9442", "background-color": "#dfffdf"}}>Devpost</a></h4></Col>
                                        <Col></Col>
                                    </Row>
                                    <br></br>
                                    
                                    
                                    {/* https://devpost.com/software/pill-pal-2svc61
                                     https://github.com/aprkr/Madhacks2023 */}
                                    
                                    
                                    
                                    <Row>
                                        {
                                            project4.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </div>
                                <div className="project-item" >
                                    
                                    <h2>Facial Recognition Application</h2>
                                    <h6><span>Uses: </span>Python and OpenCV</h6>
                                    <br></br>
                                    <p>This application uses a webcam to detect a face and helps to match it to a label. </p>
                                    <p> It is a robust facial feature detection system developed by training a classifier using a Haar-like cascade algorithm.
                                        It uses feature vector classification and face recognition on detected faces from video frames using the
                                        FaceNet deep learning model.</p>
                                    <Row>
                                        <Col></Col>
                                        <Col><h4><a href="https://github.com/RiteshwarBrar/Facial-Recognition"  target="_blank" rel="noreferrer" style={{ textDecoration:"none", color: "#3c9442", padding: "6px 12px",
  border: "2px solid #3c9442", "background-color": "#dfffdf"}}>GitHub</a></h4></Col>
                                        <Col></Col>
                                    </Row>
                                    <br></br>
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
                                </div>    
                                <div className="project-item" >
                                    
                                    <h2>Custom Shell</h2>
                                    <h6><span>Uses: </span>C in Linux environment</h6>
                                    <br></br>
                                    <p>Custom UNIX Shell, also known as a command line interpretor (CLI), takes commands to create, destroy and manage processes accordingly.
                                        The processes can be run in both the background and the foreground, depending on the input command. This shell also facilitates piping of commands.</p>
                                        <Row>
                                        <Col></Col>
                                        <Col><h4><a href="https://github.com/RiteshwarBrar/CS537-Introduction-to-Operating-Systems/tree/main/p3-main"  target="_blank" rel="noreferrer" style={{ textDecoration:"none", color: "#3c9442", padding: "6px 12px",
  border: "2px solid #3c9442", "background-color": "#dfffdf"}}>GitHub</a></h4></Col>
                                        <Col></Col>
                                    </Row>
                                    
                                    <br></br>
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
                                </div>
                                <div className="project-item" >
                                    
                                    <h2>Badger Buddies</h2>
                                    <h6><span>Uses: </span>JavaScript with React.js</h6>
                                    <br></br>
                                    <p>Badger Buddies is a web application that allows users to adopt cats online by choosing from the available cats.
                                         You can save cats for later or click on the 'Show More' button to get details about a particular cat such as age, gender, and breed.
                                         The data for this application comes from the <a href="https://www.madisoncatproject.org/" target="_blank" rel="noreferrer">Madison Cat Project</a>.</p>
                                    
                                    <Row>
                                        <Col></Col>
                                        <Col><h4><a href="https://github.com/RiteshwarBrar/Badger-Buddies"  target="_blank" rel="noreferrer" style={{ textDecoration:"none", color: "#3c9442", padding: "6px 12px",
  border: "2px solid #3c9442", "background-color": "#dfffdf"}}>GitHub</a></h4></Col>
                                        <Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>

                                        {
                                            project6.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </div>
                                <div className="project-item" >   
                                    
                                    <h2>Badger Chatroom</h2>
                                    <h6><span>Uses: </span>Javascript with React Native</h6>
                                    <br></br>
                                    <p>Badger Chatroom is a mobile application that consists of multiple chatrooms where users can create posts if they are signed in.
                                         A signed in user can also delete their own posts and sign out to simply view posts without access to create or delete them.</p>
                                    
                                    <Row>
                                        <Col></Col>
                                        <Col><h4><a href="https://github.com/RiteshwarBrar/Badger-Chat-Mobile"  target="_blank" rel="noreferrer" style={{ textDecoration:"none", color: "#3c9442", padding: "6px 12px",
  border: "2px solid #3c9442", "background-color": "#dfffdf"}}>GitHub</a></h4></Col>
                                        <Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        {
                                            project5.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                               </div>
                                <div className="project-item" >       
                                    
                                    <h2>Online Art Store</h2>
                                    <h6><span>Uses: </span>HTML, CSS, JavaScript, React.js, Node.js and MongoDB</h6>
                                    <br></br>
                                    <p>This is an ongoing project that will allow a client to post their paintings online for sale. This web application will be user-friendly to such an extent that to remove and add inventory, the client will not need to have prior knowledge of databases.
                                        Users will be able to buy paintings and via continuous development features like wishlists will also be added.</p>
                                    <p>Moreover, with only a few changes, the application can be changed to sell other goods or can serve as a blueprint for more online stores to be used by other brands.</p>
                                    <br></br>
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
                                </div>
                                    
                                    {/* <br></br>
                                    <br></br>
                                    <h2>Balance Sheet App</h2>
                                    <h6><span>Uses: </span>and OpenCV</h6>
                                    <br></br>
                                    <p>This app provides a solution to a realtime problem prevelant among the farmers in my hometown. The system of lending out money and paying the farm workers in daily wages requires the farm owners to keep track of the money they owe and the money they are owed.</p>
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
                                    </Row> */}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}