import React from 'react';
import '../assets/styles/Home.css'

const Home = ({ children }) => {
  return (
    <div className='Home'>
      <div className='Home-about'>
        <p>
          CREA COMUNIDAD, MEJORA, ENCUENTRA TRABAJO Y GANA PREMIOS
          DEMUESTRA TUS HABILIDADES PARTICIPANDO EN LAS HACKATHONES
          QUE ORGANIZAMOS Y GANA VISIBILIDAD EN EL RANKING DE CARA A
          LAS EMPRESAS Y A LA COMUNIDAD.
        </p>
      </div>
      <div className='Home-app'>
        {children}
      </div>
    </div>
  );
};

export default Home;
