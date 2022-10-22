import React, { useState } from 'react';
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
    </div>
  );
}

export default Home;
