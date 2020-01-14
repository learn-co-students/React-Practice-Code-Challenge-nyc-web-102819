import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

class SushiContainer extends React.Component {

  //Caryn solution
  // state = {
  //   startIndex: 0
  // }

  //handleMoreButton = () => {
  //   this.setState({ startIndex: this.state.startIndex + 1})
  // }

render(){
  //let displaySushis = this.props.sushi.slice(this.state.startIndex, this.start.startIndex + 4)
  return (
    <Fragment>
      <div className="belt">
        {this.props.sushi.map(sushi => (<Sushi
          sushi={sushi}
          key={sushi.id}
          name={sushi.name}
          img_url={sushi.img_url}
          price={sushi.price}
          funds={this.props.funds}
          updateTable={this.props.updateTable}
          />
          ))}
        <MoreButton moreSushi={this.props.moreSushi}/>
      </div>
    </Fragment>
  )
}
}

export default SushiContainer