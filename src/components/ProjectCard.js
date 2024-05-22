import { Col } from "react-bootstrap";
export const ProjectCard = ({title, description, imgUrl }) => {
    return (
        <Col sm={12} md={6}>
            <div className="proj-imgbx">
                {/*style={imgUrl.includes("load.svg")?{border: "2px solid #000000", "border-radius": "30px"}:{}}*/}
                
                 <img src={imgUrl} alt="title" /> 
                
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}