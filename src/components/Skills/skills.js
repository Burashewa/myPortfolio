import React from 'react';
import './skills.css'; 
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I create responsive and user-friendly websites using HTML, CSS, and JavaScript. From building new sites to improving existing ones, I focus on clean design, functionality, and a smooth user experience.</span>
        
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX design</h2>
                    <p>I craft intuitive and visually appealing user interfaces focused on providing a smooth and engaging user experience.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website design</h2>
                    <p>I design modern, responsive websites that are both functional and aesthetically pleasing across all devices.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App design</h2>
                    <p>I create clean and user-friendly app interfaces with attention to usability and mobile-first design principles.</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Skills