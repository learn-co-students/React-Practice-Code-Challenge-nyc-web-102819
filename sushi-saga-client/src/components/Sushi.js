import React from 'react'

class Sushi extends React.Component {
  
  state = {
    plate: true
  }

  clickedPlate = () => {
    if (this.state.plate && this.props.funds >= this.props.price) {
    this.setState({ plate: false })
    this.props.updateTable(this.props.price)
  }
}

  render() {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={this.clickedPlate}>
        { 
          !this.state.plate ?
            null
          :
            <img src={this.props.img_url} alt={this.props.name} width="100%" /> 
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