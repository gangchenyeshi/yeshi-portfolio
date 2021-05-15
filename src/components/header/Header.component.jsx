import React from 'react';
import "../header/Header.style.css";
import Typed from 'react-typed';

import yeshCV from "../../assets/YeshiTseringGANGHCENCVwebDeveloper.pdf"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1 className="highlight">I am Looking for Intern</h1>
                <h2  className="highlight">
                    Web developer -
                    <span>
                    <Typed
                        className="typed"
                        strings={[
                            ' Full stack',
                            ' Front end',
                            ' Back end']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >
                    </Typed>
                    </span>
                </h2>
                <a href={yeshCV} className="my-cv"  target="_blank">Download CV</a>

            </div>
        </div>
    )
}

export default Header
