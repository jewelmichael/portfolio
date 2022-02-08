import React from 'react';
import s from "./Home.module.scss";

function Home() {
  return (
    <div className="Home">
      <section className={s.banner}>
        <article className={s.jumbotron}>
          <div className={s.col}>
            <span className={s.subTitle}>Hi there,</span>
            <h1 className={s.pageTitle}>I'm <span className={s.coloredTitle}>Jewel Michael</span></h1>
            <p>I am a Kochi based UI/UX developer. Intuitive interface and
              ease in usability experience is where I always put my effort on.
              You are welcome to roam around and check my networking profiles as well.</p>
            <p>"Have a great day ahead"</p>
            <a href="#" target="_blank" rel="button" download>Download CV</a>
          </div>
          <div className={s.col}></div>
        </article>
      </section>
    </div>
  );
}

export default Home;
