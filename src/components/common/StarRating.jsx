import React, { Component } from 'react';

class StarRating extends Component {
    render() {
        console.log('this.props.place star:', this.props.place.rating);
        return (
            <div className="appy--star-rating">
                <span className="appy--image-placeid-rating-num">{this.props.place.rating}</span>
                {this.props.place.rating >= 1 ? (
                    <img src="/img/star-on.svg" alt="1" />
                ) : this.props.place.rating >= 0.5 ? (
                    <img src="/img/star-half.svg" alt="1" />
                ) : (
                            <img src="/img/star-off.svg" alt="1" />
                        )}
                {this.props.place.rating >= 2 ? (
                    <img src="/img/star-on.svg" alt="1" />
                ) : this.props.place.rating >= 1.5 ? (
                    <img src="/img/star-half.svg" alt="1" />
                ) : (
                            <img src="/img/star-off.svg" alt="2" />
                        )}
                {this.props.place.rating >= 3 ? (
                    <img src="/img/star-on.svg" alt="1" />
                ) : this.props.place.rating >= 2.5 ? (
                    <img src="/img/star-half.svg" alt="1" />
                ) : (
                            <img src="/img/star-off.svg" alt="3" />
                        )}
                {this.props.place.rating >= 4 ? (
                    <img src="/img/star-on.svg" alt="1" />
                ) : this.props.place.rating >= 3.5 ? (
                    <img src="/img/star-half.svg" alt="1" />
                ) : (
                            <img src="/img/star-off.svg" alt="4" />
                        )}
                {this.props.place.rating >= 5 ? (
                    <img src="/img/star-on.svg" alt="1" />
                ) : this.props.place.rating >= 4.5 ? (
                    <img src="/img/star-half.svg" alt="1" />
                ) : (
                            <img src="/img/star-off.svg" alt="5" />
                        )}
            </div>
        );
    }
}

export default StarRating;