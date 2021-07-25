import React from 'react';
import mylogo from "../../assets/logo.png";
import "../navbar/Navbar.style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <h2>
                    <a class="navbar-brand" href="/">
                        <img src={mylogo} className="logo" alt="Logo..." />
                    </a>
                </h2>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ">
                            <a class="nav-link active" href="/">Home </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#about">About me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#skills">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#training">Training</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
