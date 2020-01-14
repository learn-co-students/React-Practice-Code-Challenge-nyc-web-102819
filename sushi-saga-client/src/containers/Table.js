import React, { Fragment } from 'react'

const Table = (props) => {

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.money} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            props.renderPlates([props.platesArray])
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table