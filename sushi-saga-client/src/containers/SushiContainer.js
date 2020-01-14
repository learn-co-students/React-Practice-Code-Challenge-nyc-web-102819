import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map((sushi, index) => (
            < Sushi key={index} sushi={sushi} removeSushi={props.removeSushi}
                    eatenSushis={props.eatenSushis}/>
          ))
        }
        <MoreButton getMore={props.getMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer