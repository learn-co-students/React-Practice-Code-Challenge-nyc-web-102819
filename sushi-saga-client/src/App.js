import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    showSushi: [],
    count: 0,
    funds: 80,
    plates: []
  }

  componentDidMount() {
    fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      this.setState({ allSushi: data, 
      showSushi: data.splice(this.statecount, 4)
      })
      console.log(this.state)
      console.log(this.state.allSushi)
    });
  }

  moreSushi = () => {
    this.setState({ 
      count: this.state.count + 4,
      showSushi: this.state.allSushi.splice(this.statecount + 4, 4)
    })
  }

  updateTable = (price) => {
    this.setState({ 
      plates: [...this.state.plates, 1],
      funds: this.state.funds-price
    })
  }

  

  render() {
    return (
      <div className="app">
        <SushiContainer 
        updateTable={this.updateTable}
        funds={this.state.funds}
        moreSushi={this.moreSushi}
        sushi={this.state.showSushi}/>
        <Table 
        funds={this.state.funds}
        plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;

// App has SushiContainer and Table
//SushiContainer has Sushi and MoreButton
