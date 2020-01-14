import React from 'react'


class MoreButton extends React.Component{

  render(){
    return(
      <button onClick={()=>this.props.getMoreSushi()}>
        More sushi!
      </button>
    )
  }
}

export default MoreButton