import React, { Component } from 'react';

export default function BeerRating({ loading }) {
    return (
        <>
            { loading ?
                <div className='appy--image-placeid-rating appy--image-placeid-rating-loading'></div>
                :

                <div className={this.props.place ? 'appy--image-placeid-rating' :
                    this.props.type === 'tour-detail' ? 'appy--tours-detail-rating' : 'appy--tours-item-rating'}>
                    {this.props.place &&
                        <span className="appy--image-placeid-rating-num">{this.props.rating}</span>
                    }
                    {this.props.type &&
                        <span className="appy--tours-detail-rating-num">{this.props.rating}</span>
                    }
                    {this.props.rating >= 1 ? (
                        <img src="/img/rating-beer-on.svg" alt="1" />
                    ) : this.props.rating >= 0.5 ? (
                        <img src="/img/rating-beer-half.svg" alt="1" />
                    ) : (
                                <img src="/img/rating-beer-off.svg" alt="1" />
                            )}
                    {this.props.rating >= 2 ? (
                        <img src="/img/rating-beer-on.svg" alt="1" />
                    ) : this.props.rating >= 1.5 ? (
                        <img src="/img/rating-beer-half.svg" alt="1" />
                    ) : (
                                <img src="/img/rating-beer-off.svg" alt="2" />
                            )}
                    {this.props.rating >= 3 ? (
                        <img src="/img/rating-beer-on.svg" alt="1" />
                    ) : this.props.rating >= 2.5 ? (
                        <img src="/img/rating-beer-half.svg" alt="1" />
                    ) : (
                                <img src="/img/rating-beer-off.svg" alt="3" />
                            )}
                    {this.props.rating >= 4 ? (
                        <img src="/img/rating-beer-on.svg" alt="1" />
                    ) : this.props.rating >= 3.5 ? (
                        <img src="/img/rating-beer-half.svg" alt="1" />
                    ) : (
                                <img src="/img/rating-beer-off.svg" alt="4" />
                            )}
                    {this.props.rating >= 5 ? (
                        <img src="/img/rating-beer-on.svg" alt="1" />
                    ) : this.props.rating >= 4.5 ? (
                        <img src="/img/rating-beer-half.svg" alt="1" />
                    ) : (
                                <img src="/img/rating-beer-off.svg" alt="5" />
                            )}
                    {/* <img src="../../img/rating-beer-on.svg" alt="1" />
            <img src="../../img/rating-beer-on.svg" alt="2" />
            <img src="../../img/rating-beer-on.svg" alt="3" />
            <img src="../../img/rating-beer-half.svg" alt="4" />
            <img src="../../img/rating-beer-off.svg" alt="5" /> */}
                </div>
            }

        </>

    );
}