import React, { Component } from 'react';

class StarRating extends Component {
    render() {
        return (
            <div className="appy--star-rating">
                <span className="appy--star-rating-star">4.5</span>
                <img src="../../img/star-on.svg" alt="1" />
                <img src="../../img/star-on.svg" alt="2" />
                <img src="../../img/star-on.svg" alt="3" />
                <img src="../../img/star-half.svg" alt="4" />
                <img src="../../img/star-off.svg" alt="5" />
            </div>
        );
    }
}

export default StarRating;