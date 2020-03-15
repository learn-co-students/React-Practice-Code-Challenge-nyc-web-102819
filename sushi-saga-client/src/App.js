import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    displaySushi: [],
    eaten: [], 
    budget: 200
  }

  componentDidMount(){
    fetch(API)
      .then((res) => {
        return res.json()
      })
      .then((data) =>{
        this.setState({
          allSushi: data,
          displaySushi: data.slice(0,4)
        })
      })
  }

  handleMore = () => {
    let id = this.state.displaySushi[this.state.displaySushi.length - 1].id
    let newSushi = this.state.allSushi.slice(id , id + 4)
    this.setState({
      displaySushi: newSushi
    })
  }

  handleEat = (sushi) => {
    if (sushi.price <= this.state.budget) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        budget: this.state.budget - sushi.price
      })
    }
  }

  handleAddMoney = (e, amount) => {
    e.preventDefault()
    let newBudget = this.state.budget += parseInt(amount)
    this.setState({
      budget: newBudget
    })
  }


  render() {
    return (
      <div className="app">


        <SushiContainer 
          sushi={this.state.displaySushi} 
          handleMore={this.handleMore} 
          handleEat={this.handleEat} 
          eaten={this.state.eaten}
          handleAddMoney={this.handleAddMoney}
        />

        <Table 
          budget={this.state.budget}
          eaten={this.state.eaten}  
        />


      </div>
    );
  }
}

export default App;