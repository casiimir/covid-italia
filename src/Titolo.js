import React from 'react';
import './titolo.css';

const Titolo = ({ dataAttuale }) => {
  return(
    <div className="titolo-data tester">
      <h1 className="data-superiore">{ dataAttuale.YYYY }</h1>
      <h2 className="data-inferiore">{ dataAttuale.DDMM }</h2>
      <p className="covid-testo">COVID19, la situazione Italiana</p>
    </div>
  )
}

export default Titolo;