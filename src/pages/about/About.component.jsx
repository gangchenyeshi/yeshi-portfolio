import React from 'react';
import ProfileImg from "../../assets/img/profile/yeshi.png";
import ".././about/About.style.css";

// npm
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


const About = () => {
    return (
        <div className="parallex ">
            <Parallax
                blur={10}
                //   bgImage={require("../../assets/img/parallex/background.jpg")}
                bgImageAlt=""
                strength={200}
            >
                <Container className="container-box rounded">
                    <Fade left>

                        <div id="about">
                            <div className="about mt-10 mb-10">
                                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                                <Container>
                                    <Row className="pt-3 pb-5 align-item-center">
                                        {/* Profile Picture */}
                                        <Col xs={12} md={6}>
                                            <Row className="justify-content-center mb-2">
                                                <Image className="profile justify-content-end" src={ProfileImg} rounded fluid />
                                            </Row>
                                            <Row >
                                                <Col className="d-flex justify-content-center flex-wrap">
                                                    <div className="m-2">
                                                        <a href="https://github.com/gangchenyeshi" target="_blank" rel="noopener noreferrer">
                                                            <Button variant="outline-dark">
                                                                <i class="fab fa-github-square icons"></i>
                                                            </Button>
                                                        </a>
                                                    </div>

                                                    <div className="m-2">
                                                        <a href="https://www.linkedin.com/in/gangchen-yeshi-tsering-62b8031ba/" target="_blank" rel="noopener noreferrer">
                                                            <Button variant="outline-primary">
                                                                <i class="fab fa-linkedin icons"></i>
                                                            </Button>
                                                        </a>
                                                    </div>
                                                </Col>
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
                                        </Col>
                                    </Row>


                                </Container>
                            </div>
                        </div>

                    </Fade>
                </Container>
            </Parallax>
        </div>
    )
}
export default About;