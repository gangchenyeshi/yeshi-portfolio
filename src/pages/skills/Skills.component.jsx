import React from 'react';
// npm packages
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Fade from 'react-reveal/Fade';
import Container from "react-bootstrap/Container";

import "./Skills.style.css";
import { skills } from "./skills-data";

const Skills = () => {
    return (
        <div id="skills">
            <Container className="container-box rounded">
                <Fade bottom>
                    <div  className="pt-3 pb-3" >
                        <h1 className="text-center font-details-b pb-4">Tech Skills</h1>

                        <CardDeck>
                            <Row className="d-flex justify-content-around">
                                {/* {console.log(skills)} */}

                                {/* Add card Frontend  */}
                                <Col md={4}>{/* Number of col (3) that is 12/3=4 */}
                                    <Card className="focus mt-2 mb-2">
                                        <Card.Body>

                                            <Card.Title className="text-center cart-title">Frontend</Card.Title>
                                            <hr />
                                            <Card.Text className="card-text d-flex justify-content-end flex-column">
                                                {
                                                    skills.frontend.map((skill, index) => (
                                                        <span className="p-2" key={index}>
                                                            {/* {console.log(skill)} */}
                                                            <a href={skill.link}
                                                                target="_blank"
                                                                className="text-dark text-decoration-none"
                                                                rel="noopener noreferrer">
                                                                <Image src={skill.imgSrc}
                                                                    alt={skill.imgAltText}
                                                                    rounded
                                                                    className="image-style m-1" />
                                                            </a>
                                                            <span className="skill-name">{skill.skillName}</span>
                                                        </span>
                                                    ))
                                                }
                                            </Card.Text>


                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Add card backend  */}
                                <Col md={4}>{/* Number of col (3) that is 12/3=4 */}
                                    <Card className="focus mt-2 mb-2">
                                        <Card.Body>

                                            <Card.Title className="text-center cart-title">Backend</Card.Title>
                                            <hr />
                                            <Card.Text className="card-text d-flex justify-content-end flex-column">
                                                {
                                                    skills.backend.map((skill, index) => (
                                                        <span className="p-2" key={index}>
                                                            {/* {console.log(skill)} */}
                                                            <a href={skill.link}
                                                                target="_blank"
                                                                className="text-dark text-decoration-none"
                                                                rel="noopener noreferrer">
                                                                <Image src={skill.imgSrc}
                                                                    alt={skill.imgAltText}
                                                                    rounded
                                                                    className="image-style m-1" />
                                                            </a>
                                                            <span className="skill-name">{skill.skillName}</span>
                                                        </span>
                                                    ))
                                                }
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    {/* </Col> */}



                                    {/* Add card   programmingLanguages:  */}
                                    {/* <Col md={4}> */}
                                    <Card className="focus mt-2 mb-2">
                                        <Card.Body>

                                            <Card.Title className="text-center cart-title">Programming Languages</Card.Title>
                                            <hr />
                                            <Card.Text className="card-text d-flex justify-content-end flex-column">
                                                {
                                                    skills.programmingLanguages.map((skill, index) => (
                                                        <span className="p-2" key={index}>
                                                            {/* {console.log(skill)} */}
                                                            <a href={skill.link}
                                                                target="_blank"
                                                                className="text-dark text-decoration-none"
                                                                rel="noopener noreferrer">
                                                                <Image src={skill.imgSrc}
                                                                    alt={skill.imgAltText}
                                                                    rounded
                                                                    className="image-style m-1" />
                                                            </a>
                                                            <span className="skill-name">{skill.skillName}</span>
                                                        </span>
                                                    ))
                                                }
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Add card   databases:  */}
                                <Col md={4}>{/* Number of col (3) that is 12/3=4 */}
                                    <Card className="focus mt-2 mb-2">
                                        <Card.Body>

                                            <Card.Title className="text-center cart-title">Databases</Card.Title>
                                            <hr />
                                            <Card.Text className="card-text d-flex justify-content-end flex-column">
                                                {
                                                    skills.databases.map((skill, index) => (
                                                        <span className="p-2" key={index}>
                                                            {/* {console.log(skill)} */}
                                                            <a href={skill.link}
                                                                target="_blank"
                                                                className="text-dark text-decoration-none"
                                                                rel="noopener noreferrer">
                                                                <Image src={skill.imgSrc}
                                                                    alt={skill.imgAltText}
                                                                    rounded
                                                                    className="image-style m-1" />
                                                            </a>
                                                            <span className="skill-name">{skill.skillName}</span>
                                                        </span>
                                                    ))
                                                }
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    {/* </Col> */}
                                    {/* Add card   hostingPlatforms:  */}
                                    {/* <Col md={4}> */}
                                    <Card className="focus mt-2 mb-2">
                                        <Card.Body>

                                            <Card.Title className="text-center cart-title">HostingPlatforms</Card.Title>
                                            <hr />
                                            <Card.Text className="card-text d-flex justify-content-end flex-column">
                                                {
                                                    skills.hostingPlatforms.map((skill, index) => (
                                                        <span className="p-2" key={index}>
                                                            {/* {console.log(skill)} */}
                                                            <a href={skill.link}
                                                                target="_blank"
                                                                className="text-dark text-decoration-none"
                                                                rel="noopener noreferrer">
                                                                <Image src={skill.imgSrc}
                                                                    alt={skill.imgAltText}
                                                                    rounded
                                                                    className="image-style m-1" />
                                                            </a>
                                                            <span className="skill-name">{skill.skillName}</span>
                                                        </span>
                                                    ))
                                                }
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </CardDeck>
                    </div>
                </Fade>
            </Container>
        </div>
    )
}

export default Skills
