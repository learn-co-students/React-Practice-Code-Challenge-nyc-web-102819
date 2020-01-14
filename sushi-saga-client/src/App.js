import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushi: [],
    money: 200,
    start: 0,
    plates: []
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(data=>{
      this.setState({
        sushi: data
      })
    })
  }

  getMoreSushi=()=>{
    if (this.state.start > this.state.sushi.length-5){
      this.setState({
        start: 0,
      })
    } else {
      this.setState({
        start: this.state.start + 4,
      })
    }
  }

  addToPlates=()=>{
    this.setState({
      plates: [...this.state.plates, 1]
    }, ()=>console.log(this.state.plates))
  }
  // caryn's empty plates were an object 

  pay=(sushiPrice)=> {
    if (this.state.money - sushiPrice >=0 ){
      this.setState({
        money: this.state.money - sushiPrice
      },()=> console.log(this.state.money))
    } else{
      null
    }
  }

  render() {

    return (
      <div className="app">
        <SushiContainer 
          sushi={this.state.sushi} 
          start={this.state.start} 
          end={this.state.end} 
          getMoreSushi={this.getMoreSushi} 
          addToPlates={this.addToPlates} 
          pay={this.pay}
        />
        <Table 
          money={this.state.money}  
          plates={this.state.plates}
        />
      </div>
    );
  }
}

export default App;