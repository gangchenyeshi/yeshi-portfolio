import React from 'react';
import "../training/Training.style.css";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_KONEXIO from "../../assets/img/training/konexio.png";

// npm package
import Tilt from 'react-tilt';
import Slide from 'react-reveal/Slide';


const Experience = () => {
    return (
        <div id="training" className="training">
            <Container className="container-box rounded">
                <Slide bottom duration={500}>
                    <hr />
                        <h1 className="pt-3 text-center font-details-b pb-3">Training</h1>
                        <Jumbotron className="jumbotron-style">
                            <Container >
                                <Tilt options={{ max: 25 }}>
                                    <Card>
                                        <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                            <Card.Img variant="top" className="img-resize" src={L_KONEXIO} alt="Accenture logo" />
                                        </Card.Header>
                                        <Card.Body className="d-flex justify-content-center flex-column">
                                            <div>
                                                <Card.Title className="text-center">
                                                    <strong className="body-title-style ">Web &amp; Mobile Developer(fullstack)</strong>
                                                </Card.Title>
                                            </div>
                                            <div>
                                                <Card.Text className="text-left style">
                                                    <ul className="text-left">
                                                        <li><strong>Technology:</strong> JavaScript, React JS, React Native, Node JS, Express, MongoDB, MS-SQL, HTML, CSS, Bootstrap</li>

                                                        <li><strong>Duration:</strong> Nov 2020 - Present</li>
                                                        <li><strong> Description </strong> Nov 2020 - Present</li>
                                                    </ul>
                                                </Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Tilt>
                            </Container>
                        </Jumbotron>
                </Slide>
            </Container>
        </div>
    )
}

export default Experience
