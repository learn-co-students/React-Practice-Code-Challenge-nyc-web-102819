import React from 'react'

class Sushi extends React.Component {

  state = {
    eaten: false
  }

  eatSushi = () => {
    this.setState({
      eaten: !this.state.eaten
    })
  }

  checkMoney = (sushi) => {
    if (this.props.moneyAvailable >= this.props.sushi.price) {
      this.props.addToPlatesArray(this.props.sushi)
    } else {
      alert('not enough money')
    }
  }

  // (this.props.moneyAvailable > this.props.sushi.price) ? () => this.props.addToPlatesArray(this.props.sushi) : (alert('Not enough money'))

  render() {

    return (
      <div onClick={() => this.checkMoney(this.props.sushi)} className="sushi">
        <div className="plate" 
             onClick={this.eatSushi}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            this.state.eaten ?
              null
            :
              <img src={this.props.sushi.img_url} alt={this.props.sushi.name} width="100%" /> 
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi