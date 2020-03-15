import React from 'react'

class SushiWallet extends React.Component {
    
    state = {
        amount: 0
    }

    handleChange = (value) => {
        this.setState({
            amount: value
        })
    }

    render()  {
        console.log(this.state.amount)
        
        return (
            <div style={{width: 600}} >
                <h2>Sushi Wallet</h2>
                <p>How much money would you like to add?</p>
                <form onSubmit={(e) => this.props.handleAddMoney(e, this.state.amount)}>
                    $ <input type="number" onChange={(e) => this.handleChange(e.target.value)} value={this.state.amount}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SushiWallet;