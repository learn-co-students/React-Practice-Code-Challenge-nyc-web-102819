import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  
  const sushi = props.sushi

  function getMoreSushi(start){
    return sushi.slice(start, start +4)
  }
 

  return (
    <Fragment>
      <div className="belt">
        {
          getMoreSushi(props.start).map(sushi => {
            return(
            <Sushi 
              sushi={sushi} 
              key={sushi.id} 
              addToPlates={props.addToPlates}
              pay={props.pay}
            />)
          })
        }
        <MoreButton getMoreSushi ={props.getMoreSushi}/>
      </div>
    </Fragment>
  )
}


export default SushiContainer