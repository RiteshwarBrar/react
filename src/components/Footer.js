// Desc: Footer component for the website
import { Container, Col, Row } from "react-bootstrap";


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row >            
                    <Col >
                        <a className="Git" href="https://github.com/RiteshwarBrar" target="_blank" rel="noreferrer">
                            <button  ><span>GitHub</span><span /></button>
                        </a>
                        <a className="LinkedIn" href="https://www.linkedin.com/in/brar-52-ritesh" target="_blank" rel="noreferrer">
                            <button  ><span>LinkedIn</span><span /></button>
                        </a>
                    </Col>
                    <Col></Col>
                    <Col >
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJfsdLBwVhrgxmhZBgpjLLTTzKSvzpQXcPBJTkXBcLWFDXbDCjdZMFfpxgXtmTnZlrqzwvq" target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
                            <p>Email: riteshwarbrar@gmail.com</p>
                        </a>
                        <p>All Rights Reserved.</p>
                        <p>© 2024 Riteshwar Singh Brar.</p>
                          
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}