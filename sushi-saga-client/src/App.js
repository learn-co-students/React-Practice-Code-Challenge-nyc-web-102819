import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    container: [],
    count: 0,
    funds: 100,
    plates: []
    }

  componentDidMount() {
    fetch(API)
    .then(resp=> resp.json())
    .then(data => {
      console.log(data)
      this.setState({
        allSushi: data,
        container: data.splice(this.state.count,4)
      })
    })
  }

  componentDidUpdate(prevProps,prevState) {
    console.log(prevState)
    console.log(this.state)
  }

  moreSushi = () => {
    this.setState({
      count: this.state.count+4,
      container: this.state.allSushi.splice(this.state.count+4,4)
    })
  }

  updateTable = (price) => {
   
    this.setState({
      plates: [...this.state.plates,1],
      funds: this.state.funds-price
    })
  
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          allSushi = {this.state.container} 
          moreSushi = {this.moreSushi} 
          updateTable = {this.updateTable}
          funds = {this.state.funds}
        />
        <Table 
          funds = {this.state.funds} 
          plates = {this.state.plates}
        />

      </div>
    );
  }
}

export default App;
