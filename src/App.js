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
      route: 'MainPage',
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

  // setMainPaige = (path) => {
  //   this.setState({
  //     route: path
  //   });
  // }

  // setManifesto = (path) => {
  //   this.setState({
  //     route: path
  //   });
  // }

  render() {
    const { dataAttuale } = this.state;
    const dataAttualeFormattata = `
                                  ${dataAttuale.substr(8,2)} 
                                  ${dataAttuale.substr(5,2)}
                                  ${dataAttuale.substr(0,4)}
                                  `;

    return (
      <div>
        {this.state.route === 'MainPage' ?
          <MainPage
            datiDiOggi={this.state.datiDiOggi}
            datiDiIeri={this.state.datiDiIeri}
            dataAttuale={ dataAttualeFormattata }
            changeRoute={ this.setManifesto }
          /> : null
          // <Manifesto 
          //   changeRoute={ this.setMainPaige }
          // />
        }      
      </div>
    )
  }
}

export default App;