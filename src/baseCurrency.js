import React, { Component, } from 'react'

class BaseCurrency extends Component {
    render() {
        let syms = this.props.currencySymbol.map(el => {
            return <option>{el.symbol}</option>
        })
        return (
            <select>
                {}
            </select>
        )
    }
}

export default BaseCurrency