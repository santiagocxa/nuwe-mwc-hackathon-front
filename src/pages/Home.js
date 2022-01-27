import React from 'react';
import '../assets/styles/Home.css';

import imgAbout from '../assets/static/Background.png';

const Home = ({ children }) => {
  return (
    <div className='Home'>
      <div className='Home-about'>
        <div className='Home-about-img'>
          <img src={imgAbout} alt='imgPage' />
        </div>
        <p className='Home-about-p'>
          CREATE COMMUNITY, IMPROVE YOURSELF, FIND JOB AND WIN PRIZES
          SHOW OFF YOUR SKILLS BY PARTICIPATING IN THE HACKATHONES
          WHAT WE ORGANIZE AND GAINS VISIBILITY IN THE RANKING FACE TO
          THE COMPANIES AND THE COMMUNITY.
        </p>
      </div>
      <div className='Home-app'>{children}</div>
    </div>
  );
};

export default Home;
