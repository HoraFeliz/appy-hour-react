import React, { Component } from 'react'

export default class Price extends Component {
    render() {
        return (
            <div style={{ marginRight: '5px' }}>
                <span className={`appy--price-item${this.props.rating >= 1 ? '-active' : '-disabled'}`}>€</span>
                <span className={`appy--price-item${this.props.rating >= 2 ? '-active' : '-disabled'}`}>€</span>
                <span className={`appy--price-item${this.props.rating >= 3 ? '-active' : '-disabled'}`}>€</span>
            </div>
        )
    }
}
