import React from 'react';
import './tavola.css';

const Tavola = ({ nome, numeroCasi, img, didascalia }) => {
  return (
    <div className="tavola">
      <h2 className="primo-titolo">{ nome }</h2>
      <h2 className="secondo-titolo">{ numeroCasi }</h2>
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