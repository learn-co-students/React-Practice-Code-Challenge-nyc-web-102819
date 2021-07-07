import React, { Component } from 'react'

class Sushi extends Component {
  
  state = {
    eaten: false
  }

  eatSushi = () => {
    if (this.state.eaten || this.props.funds < this.props.price){
      null
    }else{
      this.setState({
        eaten: true
      })
      this.props.updateTable(this.props.price)
    }
  
  }

  render () {
    return ( 
      <div className="sushi">
        <div className="plate" 
            onClick={this.eatSushi}>
          { 
            this.state.eaten?
              null
            :
              <img src={this.props.imgUrl } alt = "oh no" width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
