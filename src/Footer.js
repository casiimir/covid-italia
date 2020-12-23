import React from 'react';
import './footer.css';

const Footer = () => {
  return (    
    <div className="footer">
      <p>
        L'applicazione utilizza i dati giornalieri della protezione civile.
        Questo piccolo contributo è il mio ringraziamento al lavoro di chi aiuta l'intero paese a resistere contro questa grande crisi. Ai medici, alle forze armate, alla protezione civile e ad ogni singolo italiano che presta attenzione alla cura dell'altro, <strong>Grazie</strong></p>
      <p>Realizzato con ❤️ da <a href="https://www.linkedin.com/in/casimiro-p-ciancimino/">Casimiro</a> <br/><span style={{fontSize: "0.8em"}}>Illustrations by <a href="https://dribbble.com/Ivan_Haidutski">Ivan Haidutski</a> from <a href="https://icons8.com/">Icons8</a></span></p>
    </div>
  )
}

export default Footer;