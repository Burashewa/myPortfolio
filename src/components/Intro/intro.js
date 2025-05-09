import React from 'react'
import './intro.css';
import bg from '../../assets/image.webp';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">I am <span className="introName">Biruk</span> <br /> Website Developer.</span>
          <p className="introPara">I am a skilled Website Developer with experience in creating <br /> visually appealling and user friendly websites.</p>
          <Link><button className="btn"><img className="btnImg" src={btnImg} alt="" /> Hire Me</button></Link>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro;