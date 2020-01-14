import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushis: [],
    counter: 0,
    eatenSushis: [],
    money: 100
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          allSushis: data
        })
      })
  }

  getMore = () => {
    let newCounter = this.state.counter + 4
    let offset = this.state.allSushis.length - newCounter
    if (offset < 0 && offset > -4) {
      newCounter = this.state.allSushis.length - 5
    } else if (offset <= -4) {
      newCounter = 0
    }
    console.log(newCounter)
    this.setState({
      counter: newCounter
    })
  }

  removeSushi = (id, price) => {
    let newMoney = this.state.money - price
    if (newMoney >= 0) {
      this.setState({
        money: newMoney
      })
      let newEatenArr = [...this.state.eatenSushis, id]
      this.setState({
        eatenSushis: newEatenArr
      })
    }
  }

  render() {

    let x = this.state.counter
    let fourSushis = [...this.state.allSushis].slice(x, x+4)

    return (
      <div className="app">
        <SushiContainer sushis={fourSushis} getMore={this.getMore} 
                        removeSushi={this.removeSushi} eatenSushis={this.state.eatenSushis}/>
        <Table money={this.state.money} plates={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;