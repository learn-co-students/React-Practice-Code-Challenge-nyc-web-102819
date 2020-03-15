import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import SushiWallet from '../components/SushiWallet'

const SushiContainer = (props) => {



  return (
    <div>
      <SushiWallet handleAddMoney={props.handleAddMoney}/>
      <br></br>
      <div className="belt">
        { props.sushi.map( sushi => (
          <Sushi 
            key={sushi.id} 
            sushi={sushi} 
            handleEat={props.handleEat}
            eaten={props.eaten}
          />
        ))
        }
        <MoreButton handleMore={props.handleMore} />
      </div>
    </div>
  )
}

export default SushiContainer