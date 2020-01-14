import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    sliceStart: 0,
    sliceEnd: 4
  }

  getMoreSushi = () => {
    this.setState({
      sliceStart: this.state.sliceStart + 4,
      sliceEnd: this.state.sliceEnd + 4
    })
  }

  render() {

    let sushiArray = this.props.allSushi.map(sushiObj => {
      return < Sushi moneyAvailable={this.props.moneyAvailable} addToPlatesArray={this.props.addToPlatesArray} sushi={sushiObj} eaten={this.props.eaten} key={sushiObj.id} renderPlates={() => this.props.renderPlates()} eatSushi={this.props.eatSushi}/>
    })
    
    let fourSushi = sushiArray.slice(this.state.sliceStart, this.state.sliceEnd)

    return (
      <Fragment>
        <div className="belt">
          {fourSushi}
          <MoreButton getMoreSushi={this.getMoreSushi}/>
        </div>
      </Fragment>
    )
  }

}

export default SushiContainer