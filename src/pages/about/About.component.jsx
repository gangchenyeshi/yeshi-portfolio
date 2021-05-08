import React from 'react';
import ProfileImg from "../../assets/img/profile/yeshi.png";
import ".././about/About.style.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';
 
const About = () => {
    return (
        <div>
            <div id="about">
                <div className="about mt-10 mb-10">
                    <h1 className="pt-3 text-center font-details pb-3 heading-1">About Me</h1>
                    <Container>
                        <Row className="pt-3 pb-5 align-item-center">
                            {/* Profile Picture */}
                            <Col xs={12} md={6}>
                                <Row className="justify-content-center mb-2">
                                    <Image className="profile justify-content-end" src={ProfileImg} rounded fluid />
                                </Row>
                            </Col>

                            {/* Profile Description */}
                            <Col xs={12} md={6} className="my-description">
                                {/* Description */}
                                <Row className=" align-items-start p-2  rounded">
                                    <p>Hello ! I am <strong>Yeshi Tsering GANGCHEN</strong></p>
                                    <p>A passionate programmer, i am a Full Stack Web Developer with React.js, Redux, Express.js Node.js and MongoDB as my tech Stack.</p>
                                    <p>During seven years working in information technologies, I learned and discovered a passion for computer sciences. My fascination for web development and mobile technologies  drove me to intensive learning of these skills through specific
                                certifications. I'm currently following a specialized degree on web & mobile development with Konexio in order to become an expert as a full stack web & mobile developer. <b>Therefore looking for a 4 to 6 months internship, and I am available now. </b></p>
                                </Row>
                                {/* Links Button */}
                                <Row className="d-flex justify-content-center">
                                    <div>
                                        <a href="#">
                                            {/* <FontAwesomeIcon icon={faGithub} /> */}
                                            <Button variant="outline-dark" className="m-2">Github</Button>
                                        </a>
                                        <a href="#">
                                            <Button variant="outline-dark" className="m-2">LinkedIn</Button>
                                        </a>
                                        <a href="#contact">
                                            <Button variant="outline-dark" className="m-2">Contact</Button>
                                        </a>
                                    </div>
                                </Row>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default About;