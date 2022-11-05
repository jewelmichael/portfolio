import React from 'react';
import s from "./Home.module.scss";

function Home() {

  return (
    <div className={s.Home}>
      <section className={s.banner}>
        <article className={s.jumbotron}>
          <div className={s.col}>
            <span className={s.subTitle}>Hi there,</span>
            <h1 className={s.pageTitle}>I'm <span className={s.coloredTitle}>Jewel Michael</span></h1>
            <p>I am a Kochi based UI/UX developer. Intuitive interface and
              ease in usability experience is where I always put my effort on.
              You are welcome to roam around and check my networking profiles as well.</p>
            <p>"Have a great day ahead"</p>
            <a href="#" target="_blank" rel="button" className={s.btn}><i><img src={require('../../Assets/Images/ic-download.svg').default} /></i>Download CV</a>
          </div>
          <div className={s.col}>
            <div className={s.personalPic}>
              <img src={require('../../Assets/Images/Face01.jpg')} alt="Jewel Michael" />
            </div>
          </div>
        </article>
      </section>
      <section>

        <article className="container">
          <div>
            <h2>What do I help?</h2>
            <p>I will help you with finging a solution and solve your problems, We use process design to create digital products.Besids that also help their business.</p>
            <p>We use process design to create digital products. Besids that also help their business.</p>
            <div>
              <div>
                <span>100+</span>
                <span>Projects Completed</span>
              </div>
              <div>
                <span>60+</span>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>
          <div>
            <div className={s.highlight_card}>
              <div className={`${s.col1} ${s.darkest}`}>
                <img src={require('../../Assets/Images/Icons/desktop.svg').default} alt="" />
              </div>
              <div className={s.col2}>
                <div>Website Development</div>
                <div>25</div>
              </div>
            </div>
            <div className={s.highlight_card}>
              <div className={`${s.col1} ${s.darker}`}>
                <img src={require('../../Assets/Images/Icons/mobile.svg').default} alt="" />
              </div>
              <div className={s.col2}>
                <div>Mobile Development</div>
                <div>25</div>
              </div>
            </div>
            <div className={s.highlight_card}>
              <div className={`${s.col1} ${s.green}`}>
                <img src={require('../../Assets/Images/Icons/badge.svg').default} alt="" />
              </div>
              <div className={s.col2}>
                <div>Product Designing</div>
                <div>25</div>
              </div>
            </div>
          </div>
        </article>

      </section>
    </div>
  );
}

export default Home;
