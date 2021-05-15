import React from 'react';
import "./Footer.style.css";
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div id="footer">
            <hr/>
            <Fade bottom>
            <div className="mt-10 text-center footer-style">
            Copyright @ YESHI TSERING GANHCHEN &nbsp; {new Date().getFullYear()}
            </div>
            </Fade>
        </div>
    )
}

export default Footer;
