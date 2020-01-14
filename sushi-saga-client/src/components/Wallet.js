import React from 'react'

class Wallet extends React.Component {

    // handleSubmit = (event, moneyToAdd) => {
    //     event.preventDefault();
    //     console.log(event)
    //     console.log(moneyToAdd)
    //     // this.setState({
    //     //   money: this.state.money + moneyToAdd
    //     // })
    //   }    
  
    render() {

      return (
        <form onSubmit={(e) => this.props.handleSubmit(e, this.props.formVal)}>
          <label>
            Add to Wallet:
            <input type="text" value={this.props.formVal} onChange={(e) => this.props.handleChange(e)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Wallet;