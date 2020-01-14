import React from 'react'

//add click event to show the next 4 elements of allSushi array
const MoreButton = (props) => {

  
    return <button 
    onClick={props.moreSushi}
    >
            More sushi!
          </button>
}

export default MoreButton