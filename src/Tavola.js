import React from 'react';
import './tavola.css';

const Tavola = ({ nome, numeroCasi, img, didascalia }) => {
  return (
    <div className="tavola col-xs-12 col-md-5 col-lg-4">
      <div className="titoli-tavola">
        <h2 className="primo-titolo">{ nome }</h2>
        <h2 className="secondo-titolo animate__animated animate__fadeIn">{ (numeroCasi !== 'undefined') ? numeroCasi : 'no internet' }</h2>
      </div>
      <hr/>
      <img className="illustrazioni" src={ img } alt="dati-covid-oggi"/>
      <div className="cornice-testo">
        { didascalia }
      </div>
      <br/>
    </div>
  )
}

export default Tavola;