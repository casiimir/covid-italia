import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import immuniPng from './img/immuni.png';

const dataAttuale = new Date();
const giornoAttuale = dataAttuale.getDate();

function siamoInAllerta() {
  // Thss
  if ((getColoreFascia() === 'rossa') || 
      (getColoreFascia() === 'arancione')) {
        if (getColoreFascia() === 'rossa') {
          return (
            <div className="pannello-laterale rossa">
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faHome} />
                </a>
              </li>
              <li>
                <a href="http://www.governo.it/it/coronavirus-normativa">
                  <FontAwesomeIcon icon={faCopy} />
                </a>
              </li>
              <li>
                <a href="https://www.immuni.italia.it/download.html">
                  <img className="icon" src={ immuniPng } alt="immuni-app"/>
                </a>
              </li>
            </ul>
            <hr className="separatore-icone"/>
            <p className="testo-attenzione">Oggi siamo in fascia { getColoreFascia(giornoAttuale) }</p>
          </div>
          )
        } else {
          return (
            <div className="pannello-laterale arancione">
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faHome} />
                </a>
              </li>
              <li>
                <a href="http://www.governo.it/it/coronavirus-normativa">
                  <FontAwesomeIcon icon={faCopy} />
                </a>
              </li>
              <li>
                <a href="https://www.immuni.italia.it/download.html">
                  <img className="icon" src={ immuniPng } alt="immuni-app"/>
                </a>
              </li>
            </ul>
            <hr className="separatore-icone"/>
            <p className="testo-attenzione">Oggi siamo in fascia { getColoreFascia(giornoAttuale) }</p>
          </div>
          )
        }
  } else {
    return (
      <div className="pannello-laterale nessuno">
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faHome} />
            </a>
          </li>
          <li>
            <a href="http://www.governo.it/it/coronavirus-normativa">
              <FontAwesomeIcon icon={faCopy} />
            </a>
          </li>
          <li>
            <a href="https://www.immuni.italia.it/download.html">
              <img className="icon" src={ immuniPng } alt="immuni-app"/>
            </a>
          </li>
        </ul>
        <hr className="separatore-icone"/>
        <p className="testo-attenzione">Prevenire è meglio di curare</p>
      </div>
    )
  }
}

function getColoreFascia () {
  let coloreFascia = '';

  switch (giornoAttuale) {
    case 24: case 25: case 26: case 27: case 31: case 1: case 2: case 3: case 5: case 6:
      coloreFascia = "rossa";
      break;
    case 28: case 29: case 30: case 4:
      coloreFascia = "arancione";
      console.log("ok")
      break;
    default:
      coloreFascia = "nessuno";
      break;
  }

  return coloreFascia;
}

const Navbar = () => {
  return (
    <div>      
      { siamoInAllerta() }
    </div>
  )
}

export default Navbar;