import { Link } from "react-router-dom";

import('../css/App.css')

function Contact() {
    return (
        <>
            <div className="contact-container">
                <p className="contact-question">Can YOU find her?</p>
                <div className='contact-uno'>
                <Link to="https://www.linkedin.com/in/marta-barocela/" target="_blank" rel="noopener noreferrer" className='contact-uno-p'>LINKEDIN</Link>
                </div>
                <div className='contact-dos'>
                <Link to="https://github.com/MABAROCELA" target="_blank" rel="noopener noreferrer" className='contact-dos-p'>GITHUB</Link>
                </div>
                <div className='contact-tres'>
                <a href="mailto:marbarocela@gmail.com" className='contact-tres-p'>E-MAIL</a>
                </div>
                <div className='contact-cuatro'>
                <Link to="https://www.instagram.com/martuchi0502/" target="_blank" rel="noopener noreferrer" className='contact-cuatro-p'>INSTAGRAM</Link>
                </div>
            </div>
        </>
    );
};

export default Contact;