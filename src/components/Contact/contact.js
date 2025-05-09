import './contact.css';
import Walmart from '../../assets/html.png';
import Adobe from '../../assets/css.jpg';
import Microsoft from '../../assets/js.png';
import Facebook from '../../assets/figma.png';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import Github from '../../assets/github .png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_86ee8rl', 'template_zq0htbs', form.current, 'SAwlpDQYfV99yDgv-')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">Skills</h1>
                <span className="clientDesc">
                Front-End Development – HTML, CSS, JavaScript, Responsive Design<br/>
                Version Control – Git & GitHub<br/>
                UI/UX Design – Basic principles of user-centered design<br/>
                Problem-Solving – Debugging and optimizing code<br/>
                Tools & Technologies – VS Code, Chrome DevTools, Figma (basic)
                </span>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />                   
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='your_name' />
                    <input type="text" className="email" placeholder='Your Email' name='your_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="Facebook" className="link" />
                        <img src={twitterIcon} alt="Twitter" className="link" />
                        <a href="https://github.com/Burashewa">
                            <img src={Github} alt="Github" className="link" />
                        </a>
                        <a href="https://www.instagram.com/bearuch89/">
                            <img src={instagramIcon} alt="Instagram" className="link" />
                            </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;