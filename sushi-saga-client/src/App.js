import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    platesArray: [],
    money: 100
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
    console.log('calling render plates')
    // this.setState({
    //   platesArray: [...this.state.platesArray, 'new']
    // })
    return this.state.platesArray.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  addToPlatesArray = (sushiObj) => {
    console.log('sushi to eat: ', sushiObj)
    this.setState({
       platesArray: [...this.state.platesArray, 'new'], 
       money: this.state.money - sushiObj.price
    })
  }

  // eatSushi = (sushiObj) => {

  //   console.log(sushiObj)
  //   if (sushiObj){
  //     sushiObj.eaten = !sushiObj.eaten
  //   };    

  //   // this.setState({
  //   //   eaten: !this.state.eaten
  //   // });
  //   // func2();
  // }

  render() {

    // let newPlatesArray = [...this.state.platesArray, '']

    return (
      <div className="app">
        <SushiContainer 
        allSushi={this.state.allSushi} 
        renderPlates={() => this.renderPlates()}
        eatSushi={this.eatSushi}
        addToPlatesArray={this.addToPlatesArray}
        moneyAvailable={this.state.money}/>
        <Table renderPlates={() => this.renderPlates()} platesArray={this.state.platesArray} money={this.state.money}/>
      </div>
    );
  }
}

export default App;