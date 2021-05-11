import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <div className="footer__component">
            <div className="footer__item">
                Developed by ©Fernando Giraudo GTech Solutions 2021 
            </div>
            <div className="footer__item item___social-media">
                <a href="https://www.linkedin.com/in/fernando-giraudo/"><i className="fab fa-linkedin"> Linkedin</i></a>
                <a href="https://github.com/fergiraudo91"><i className="fab fa-github-square"> GitHub</i></a>
                <a href="https://www.facebook.com/FerLione"><i className="fab fa-facebook-square"> Facebook</i></a>
            </div>
        </div>
    )
}
