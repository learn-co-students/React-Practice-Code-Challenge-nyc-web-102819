import React, { Fragment } from 'react'

const Table = (props) => {
  
  
  const renderPlates = (array) => {
    
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
  const consoleLog = (log) => { console.log(log)}

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.funds } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.plates)
          }
         
          
        </div>
      </div>
    </Fragment>
  )
}

export default Table
