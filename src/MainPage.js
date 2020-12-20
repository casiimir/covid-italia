import React from 'react';
import './mainPage.css';

import AnimatedNumber from "animated-number-react";


function calcolaRispettoIeri (dati) {
  if (dati > 0) {
    return `🎁 ${dati} in meno`;
  } return `${Math.abs(dati)} in più`;
}

const MainPage = ({datiDiOggi, datiDiIeri, dataAttuale, changeRoute}) => {
  const { nuovi_positivi, ricoverati_con_sintomi, terapia_intensiva, isolamento_domiciliare, deceduti, dimessi_guariti } = datiDiOggi;
  const numeroPositiviRispettoIeri = datiDiIeri.nuovi_positivi - nuovi_positivi;
  const numeroRicoveratiRispettoIeri = datiDiIeri.ricoverati_con_sintomi - ricoverati_con_sintomi;
  const numeroTerapiaIntensRispettoIeri = datiDiIeri.terapia_intensiva - terapia_intensiva;

  const numGuaritiOggi = <AnimatedNumber
                            value={dimessi_guariti}
                            formatValue={(value) => value.toFixed(0)}
                            duration="10000"
                          />;

  const dataFormat = dataAttuale.replace(/\s/g, '');                      
  const dataAttualeFormat = {
    DDMM: `${dataFormat.substr(0,2)}-${dataFormat.substr(2,2)}`,
    YYYY: dataFormat.substr(4,4),
  };

  return (
    <div className="container-fluid">
      <div className="data-title">
        <h1>{ dataAttualeFormat.YYYY }</h1>
        <h6 class="data-span">{ dataAttualeFormat.DDMM }</h6>
        <p>COVID19, la situazione Italiana</p>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="card section col-xs-12 col-sm-4 col-md-4 col-lg-2 shadow-lg mb-2 rounded">
          <div className="card-body">
            <h3 className="card-title">{ nuovi_positivi }</h3>
            <hr/>
            <p className="card-text">i nuovi positivi nel nostro paese <strong> { calcolaRispettoIeri(numeroPositiviRispettoIeri) } </strong> rispetto a ieri.</p>
          </div>  
        </div>
        <div className="card section col-xs-12 col-sm-7 col-md-7 col-lg-3 shadow-lg mb-2 rounded">
          <div className="card-body">
            <h3 className="card-title">{ ricoverati_con_sintomi }</h3>
            <hr/>
            <p className="card-text">italiani stanno passando le feste natalizie ricoverati all'ospedale <strong>{ calcolaRispettoIeri(numeroRicoveratiRispettoIeri) } </strong> rispetto a ieri.</p>
          </div>
        </div>
        <div className="card section col-xs-12 col-sm-7 col-md-6 col-lg-3 shadow-lg mb-2 rounded">
          <div className="card-body">
            <h3 className="card-title">{isolamento_domiciliare}</h3>
            <hr/>
            <p className="card-text">sono quelli isolamento domiciliare e, con loro probabilmente, l'intera famiglia.</p>
          </div>
        </div>
        <div className="card section col-xs-12 col-sm-4 col-md-5 col-lg-2 shadow-lg mb-2 rounded">
          <div className="card-body">
            <h3 className="card-title">{ terapia_intensiva }</h3>
            <hr/>
            <p className="card-text">in terapia intensiva <strong>{ calcolaRispettoIeri(numeroTerapiaIntensRispettoIeri) } </strong> rispetto a ieri.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="section-final col-12">
          <p className="text-center alt-text"> <strong> Ad oggi i guariti ammontano a:</strong></p>
          <h2 className="alt-title">{ numGuaritiOggi }</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h3 className="alt-strong">{ deceduti }</h3>
          <hr/>
          <p className="text-center alt-text">
            I nostri concittadini deceduti. A loro, più di ogni altro,
            va il nostro <strong className="alt-strong">sacrificio</strong> per questo Natale <strong className="alt-strong">diverso</strong>.
          </p>
        </div>
        <div className="col-6">
          <p className="manifesto">
            <a href="http://www.salute.gov.it/portale/nuovocoronavirus/archivioNormativaNuovoCoronavirus.jsp">Contribuiamo al Miracolo del Natale</a>
          </p>      
          <p className="text-center">
            <strong className="alt-strong restiamo-a-casa">Restiamo a casa</strong>
          </p>
        </div>
      </div>
      <div class="footer-text">
        <p class="text-center">Questo sito utilizza i dati della protezione civile, giornalmente aggiornati.
         Rendo questo piccolo contributo a tutti coloro che, tramite il proprio lavoro, aiutano l'intero paese a resistere contro questa grande crisi. Ai meidici, alle forze armate, alla protezione civile e ad ogni singolo italiano che presta attenzione alla cura dell'altro, Grazie.</p>
         <p class="text-center">Realizzato con ❤️ da <a href="https://www.linkedin.com/in/casimiro-p-ciancimino/">Casimiro</a></p>
      </div>
    </div>
  )
}

export default MainPage;