import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

 class SushiContainer extends Component {
  

  showSushi = (all) => {
    // console.log(all)
    return all.map(sushi => 
      <Sushi 
        key = {sushi.id} 
        name = {sushi.name} 
        price = {sushi.price} 
        imgUrl = {sushi.img_url} 
        updateTable = {this.props.updateTable}
        funds = {this.props.funds}
      /> 
    )



    // this.setState({
    //   showSushi: this.state.allSushi.filter(each => each.id > this.state.startCount && each.id < this.state.endCount)
    // })


  }
  
  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.showSushi(this.props.allSushi)}
          <MoreButton moreSushi = {this.props.moreSushi} />
        </div>
      </Fragment>
    )
        
  }
}

export default SushiContainer
