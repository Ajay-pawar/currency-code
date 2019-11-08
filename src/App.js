import React, { Component } from 'react';
import Header from './header';
import BaseCurrency from './baseCurrency'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      amount: "Enter amount",
      currencies: []
    }
  }

  getAmount = (e) => {
    this.setState({ amount: e.target.value })
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/mddenton/062fa4caf150bdf845994fc7a3533f74/raw/27beff3509eff0d2690e593336179d4ccda530c2/Common-Currency.json"
    ).then(res => res.json())
      .then(data => this.setState({ currencies: data }));
  }

  render() {
    return (
      <div>
        <Header />
        <input onChange={this.getAmount} value={this.state.amount}></input>
        <BaseCurrency currencySymbol={this.state.currencies} />

        <p></p>

      </div>
    )
  }
}
export default App;
