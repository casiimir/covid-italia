import React, { Component } from 'react';
import MainPage from  './MainPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataAttuale: '',
      datiDiOggi: '',
      datiDiIeri: '',
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
      .then(response => response.json())
      .then(rawData => {
        this.setState({
          datiDiOggi: rawData[rawData.length - 1],
          datiDiIeri: rawData[rawData.length - 2],
          dataAttuale: rawData[rawData.length - 1].data,         
        });
      })
  }
  render() {
    const { dataAttuale } = this.state;
    const dataAttualeFormattata = `
                                  ${dataAttuale.substr(8,2)} 
                                  ${dataAttuale.substr(5,2)}
                                  ${dataAttuale.substr(0,4)}
                                  `;

    return (
      <div>
        <MainPage
          datiDiOggi={this.state.datiDiOggi}
          datiDiIeri={this.state.datiDiIeri}
          dataAttuale={ dataAttualeFormattata }
          changeRoute={ this.setManifesto }   
        /> 
      </div>
    )
  }
}

export default App;