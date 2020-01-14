import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './components/Wallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    platesArray: [],
    money: 100,
    formVal: ''
  }

  componentDidMount() {
    fetch(`${API}`)
      .then(res => res.json())
      .then(
        (sushis) => {
          this.setState({
            allSushi: sushis
          });
        })
  }

  renderPlates = () => {
    // console.log('calling render plates')
    // this.setState({
    //   platesArray: [...this.state.platesArray, 'new']
    // })
    return this.state.platesArray.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  addToPlatesArray = (sushiObj) => {
    // console.log('sushi to eat: ', sushiObj)
    this.setState({
       platesArray: [...this.state.platesArray, 'new'], 
       money: this.state.money - sushiObj.price
    })
  }

  handleSubmit = (event, moneyToAdd) => {
    event.preventDefault();
    this.setState({
      money: parseInt(this.state.money) + parseInt(moneyToAdd),
      formVal: ''
    })
  } 

  handleChange = (event) => {
    console.log(this.state.formVal)
    this.setState({
        formVal: event.target.value
      });
  }


  render() {

    // let newPlatesArray = [...this.state.platesArray, '']

    return (
      <div className="app">
        < Wallet 
        formVal={this.state.formVal} 
        handleSubmit={(e, moneyToAdd) => this.handleSubmit(e, moneyToAdd)} 
        handleChange={(e) => this.handleChange(e)}/>
        <SushiContainer 
        allSushi={this.state.allSushi} 
        renderPlates={() => this.renderPlates()}
        eatSushi={this.eatSushi}
        addToPlatesArray={this.addToPlatesArray}
        moneyAvailable={this.state.money}/>
        <Table 
        renderPlates={() => this.renderPlates()} 
        platesArray={this.state.platesArray} 
        money={this.state.money}/>
      </div>
    );
  }
}

export default App;