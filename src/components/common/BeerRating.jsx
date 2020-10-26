import React, { Component } from 'react';

class BeerRating extends Component {
    render() {
        return (
            <div className={this.props.place ? 'appy--image-placeid-rating' : 'appy--tours-item-rating'}>
                {this.props.place &&
                    <span className="appy--image-placeid-rating-num">4.5</span>
                }
                <img src="../../img/rating-beer-on.svg" alt="1" />
                <img src="../../img/rating-beer-on.svg" alt="2" />
                <img src="../../img/rating-beer-on.svg" alt="3" />
                <img src="../../img/rating-beer-half.svg" alt="4" />
                <img src="../../img/rating-beer-off.svg" alt="5" />
            </div>
        );
    }
}

export default BeerRating;