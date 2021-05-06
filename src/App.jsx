import React from 'react';
import styles from './css.module.css'
import Photocv from './components/assets/Photocv.jpg';

function App() {
  return (
    <div className={styles.header}>
        <div class={styles.banner}>
          <img className={styles.img} src={Photocv} alt=""/>
        </div>
      <div className={styles.textCenter}>
        <h1>Pascal JOLY</h1>
        <h3>Développeur<br/>en formation à la Wild Code School</h3>
        <h4>Cliquez sur les icônes pour me contacter</h4>  
      </div>
        <ul className={styles.checklist}>
          <li><a className={styles.linkedin} href="https://www.linkedin.com/in/pascal-joly-a62a23196" target="_blank" rel="noreferrer"><i class="fa fa-linkedin"></i></a></li>
          <li><a className={styles.github}href="https://github.com/Banzaipj" target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a></li> 
        </ul>
        <div className={styles.quest}>
          <h4><em>Evaluer cette quête</em></h4>
          <div className={styles.stars}>
            <a href="#1" title="Give 1 star">★</a>
            <a href="#2" title="Give 2 stars">★</a>
            <a href="#3" title="Give 3 stars">★</a>
            <a href="#4" title="Give 4 stars">★</a>
            <a href="#5" title="Give 5 stars">★</a>
          </div>
        </div>
    </div>
  );
}

export default App;
