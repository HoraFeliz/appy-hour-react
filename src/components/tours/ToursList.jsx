import React, { Component } from 'react';

class TourList extends Component {
    render() {
        return (
            <div className="appy--tours-list">
                {this.props.children}
            </div>
        );
    }
}

export default TourList;