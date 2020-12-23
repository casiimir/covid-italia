import React from 'react';

import './mainPage.css';
import Navbar from './Navbar';
import Titolo from './Titolo';
import Tavola from './Tavola';
import Footer from './Footer';

import positiviPng from './img/positivi.png';
import ricoveratiPng from './img/ricoverati.png';
import intensivaPng from './img/intensiva.png';
import isolamentoPng from './img/isolamento.png';
import guaritiPng from './img/guariti.png';
import decedutiPng from './img/deceduti.png';


function controlloConnessione (dati) {
  return (calcolaRispettoIeri(dati) !== 'NaN in più') ? calcolaRispettoIeri(dati) : '(connessione al database assente)';
}

function calcolaRispettoIeri (dati) {
  if (dati > 0) {
    return `🎁 ${dati} in meno`;
  } return `${Math.abs(dati)} in più`;
}

// Aggiunge il punto alla cifra del migliaio
function ottieniNumeroCon (cifra) {
  return String(cifra).replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

const MainPage = ({datiDiOggi, datiDiIeri, dataAttuale}) => {
  const { nuovi_positivi, ricoverati_con_sintomi, terapia_intensiva, isolamento_domiciliare, deceduti, dimessi_guariti } = datiDiOggi;
  const numeroPositiviRispettoIeri = datiDiIeri.nuovi_positivi - nuovi_positivi;
  const numeroRicoveratiRispettoIeri = datiDiIeri.ricoverati_con_sintomi - ricoverati_con_sintomi;
  const numeroTerapiaIntensRispettoIeri = datiDiIeri.terapia_intensiva - terapia_intensiva;

  const dataFormat = dataAttuale.replace(/\s/g, '');                      
  const dataAttualeFormat = {
    DDMM: `${dataFormat.substr(0,2)}-${dataFormat.substr(2,2)}`,
    YYYY: dataFormat.substr(4,4),
  };

  // Tavole
  const tavole = [
    {
      nome: 'POSITIVI',
      numeroCasi: ottieniNumeroCon(nuovi_positivi),
      img: positiviPng,
      didascalia: <p>I nuovi positivi nel nostro paese, <strong>{ controlloConnessione(numeroPositiviRispettoIeri) }</strong>  rispetto a ieri.</p>
    },
    {
      nome: 'ISOLAMENTO DOMICILIARE',
      numeroCasi: ottieniNumeroCon(isolamento_domiciliare),
      img: isolamentoPng,
      didascalia: <p>Sono quelli isolamento domiciliare e con loro, probabilmente, l'intera <strong>famiglia</strong>.</p>
    },
    {
      nome: 'RICOVERATI',
      numeroCasi: ottieniNumeroCon(ricoverati_con_sintomi),
      img: ricoveratiPng,
      didascalia: <p>Gli italiani che passando le feste natalizie ricoverati all'ospedale, <strong>{ controlloConnessione(numeroRicoveratiRispettoIeri) }</strong> rispetto a ieri.</p>
    },
    {
      nome: 'TERAPIA INTENSIVA',
      numeroCasi: ottieniNumeroCon(terapia_intensiva),
      img: intensivaPng,
      didascalia: <p>Troppi i casi più gravi, <strong> { (controlloConnessione(numeroTerapiaIntensRispettoIeri)) } </strong> rispetto a ieri </p>
    },
    {
      nome: 'DECEDUTI',
      numeroCasi: ottieniNumeroCon(deceduti),
      img: decedutiPng,
      didascalia: <p>I nostri concittadini deceduti. A loro, più di ogni altro, va il nostro <strong className="alt-strong">sacrificio</strong> per questo Natale <strong className="alt-strong">diverso</strong>.</p>
    },
    {
      nome: 'GUARITI',
      numeroCasi: ottieniNumeroCon(dimessi_guariti),
      img: guaritiPng,
      didascalia: <p>Il numero dei dimessi guariti cresce di giorno in giorno, <strong>insieme</strong> possiamo vincere. <br/> <strong>Restiamo a casa.</strong></p>
    },
  ];

  // Render Tavole
  const renderTavole = [];
  for (let i = 0; i <= tavole.length - 1; i++) {
    renderTavole.push(
      <Tavola 
        nome={ tavole[i].nome }
        numeroCasi={ tavole[i].numeroCasi }
        img={ tavole[i].img }
        didascalia={ tavole[i].didascalia }
        key={ i }
      />
    );
  }

  return (
    <div className="container-fluid">  
      <Navbar /> 
      <Titolo dataAttuale={ dataAttualeFormat }/> 
      <div className="row d-flex">
        { renderTavole }    
      </div>  
      <Footer />
    </div>
  )
}

export default MainPage;