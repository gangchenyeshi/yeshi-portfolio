import React from 'react';
import "./Contact.style.css"

// npm package
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Fade from 'react-reveal/Fade';
import Form from 'react-bootstrap/Form'

const Contact = () => {
    return (
        <div id="contact">
            <hr />
            <h1 className="pt-3 text-center font-details-b pb-3">Contact Me</h1>
            <Container className="container-box rounded">

                <Jumbotron className="contact-jumbotron">
                    <Fade bottom>
                        {/* <Row>
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div className="m-2">
                                    <a href="yestsering@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline-danger">
                                            <i className="fas fa-envelope-square icons"></i>
                                            Email Me
                                        </Button>
                                    </a>
                                </div>
                            </Col>

                            <Col className="d-flex justify-content-center flex-wrap">
                                <div className="m-2">
                                    <a href="https://github.com/gangchenyeshi" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline-dark">
                                            <i class="fab fa-github-square icons"></i>
                                            Github
                                        </Button>
                                    </a>
                                </div>
                            </Col>

                            <Col className="d-flex justify-content-center flex-wrap">
                                <div className="m-2">
                                    <a href="https://www.linkedin.com/in/gangchen-yeshi-tsering-62b8031ba/" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline-primary">
                                            <i class="fab fa-linkedin icons"></i>
                                            LinkedIn
                                        </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row> */}
                        <Row>
                            <Col className=" justify-content-center">
                                <Form>
                                    <Form.Row>
                                        <Col xs={12} md={4} className="mb-3">
                                        <input type="text" class="form-control" name="name" placeholder="Your Name" required="required" />
                                        </Col>
                                        <Col xs={12} md={4} className="mb-3">
                                        <input type="email" className="form-control" name="email" placeholder="Your Email" required="required" />
                                        </Col>
                                        <Col xs={12} md={4} className="mb-3">
                                        <input type="text" className="form-control" name="phone" placeholder="Your phone number" required="required" />
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col xs={12} className="mb-3">
                                        <textarea class="form-control" name="message" placeholder="Message" rows="6" cols="30"></textarea>
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col xs={12} className="d-flex justify-content-end mb-3">
                                        <button class="btn btn-primary" type="button">Send Message</button>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </Col>
                        </Row>
                    </Fade>
                </Jumbotron>

            </Container>
        </div>
    )
}

export default Contact;
