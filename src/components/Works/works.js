import React from 'react';
import './works.css';
import portifolio1 from '../../assets/portfolio-1.png';
import portifolio2 from '../../assets/portfolio-2.png';
import portifolio3 from '../../assets/portfolio-3.png';
import portifolio4 from '../../assets/portfolio-4.png';
import portifolio5 from '../../assets/portfolio-5.png';
import portifolio6 from '../../assets/portfolio-6.png';
const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">A 3rd year computer scince and enginnering student at Adama Scince and
                                    technology University. eger to develop software product which can solve
                                    real world problem. </span>
        <div className="worksImgs">
            <img src={portifolio1} alt="" className="worksImg" />
            <img src={portifolio2} alt="" className="worksImg" />
            <img src={portifolio3} alt="" className="worksImg" />
            <img src={portifolio4} alt="" className="worksImg" />
            <img src={portifolio5} alt="" className="worksImg" />
            <img src={portifolio6} alt="" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  );
}

export default Works