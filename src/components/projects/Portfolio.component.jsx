import React from 'react';
import "./Portfolio.style.css";
import { timelineElements } from "./Portfolio-data";

//Icon 
import { ReactComponent as WorkIcon } from "../../assets/img/timeline/work.svg";
// import workIcon from "../../assets/img/timeline/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/img/timeline/school.svg";


// npm package

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const Portfolio = () => {
    //background style color for Icons
    let workIconStyle = { background: "#06D6A0" };
    let schoolIconStyle = { background: "#f9c747" };

    console.log(timelineElements.projects);


    return (
        <div id="portfolio" className="portfolio">
            <hr />
            <h1 className="text-center font-details-b pb-4">Projects</h1>

            <h5 className="text-center -b pb-4">New Project will upload soon...</h5>
            <VerticalTimeline>
                {timelineElements.projects.map(element => {
                    console.log(element)
                    let isWorkIcon = element.icon === "work"; //isWorkIcon is var is equal to element.icon, if icon === "work" then
                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date" //change the style for date so we give dateClaseName
                            iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
                            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                        >
                            <Accordion>
                                <h2 className="text-center card-title pb-1">{element.title}</h2>
                                <Card>

                                    <img src={element.image} alt={element.title} className="mb-2" />
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                        Project Details
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0" className="p-2 text-left">
                                        <Card.Body>
                                            <strong>Description : </strong>
                                            {element.description}
                                            <hr />
                                            <strong>Technologies used : </strong>
                                            {element.technologiesUsed.join(', ')};
                                            {/* .join(' ') will separate the multiiple string */}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion>
                                        <Card.Body className="d-flex justify-content-end flex-nowrap text-center"><a href={element.view} target="_blank" rel="noreferrer" className="view-button">View</a></Card.Body>
                                    </Accordion>
                                </Card>
                            </Accordion>
                        </VerticalTimelineElement>
                    )
                })
                }
            </VerticalTimeline>
            <h5 className="text-center -b pb-4">old Project.</h5>
        </div>
    )
}

export default Portfolio;
