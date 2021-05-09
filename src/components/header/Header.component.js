import React from 'react';
import "../header/Header.style.css";
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>I am Looking for Intern</h1>
                <h2>
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
                <a href="#" className="my-cv">Download CV</a>

            </div>
        </div>
    )
}

export default Header