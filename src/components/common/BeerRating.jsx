import React from 'react';

export default function BeerRating({ loading, place, type, rating }) {
    return (
        <>
            { loading ?
                <div className='appy--image-placeid-rating appy--image-placeid-rating-loading'></div>
                :

                <div className={place ? 'appy--image-placeid-rating' :
                    type === 'tour-detail' ? 'appy--tours-detail-rating' : 'appy--tours-item-rating'}>
                    {place &&
                        <span className="appy--image-placeid-rating-num">{rating}</span>
                    }
                    {type &&
                        <span className="appy--tours-detail-rating-num">{rating}</span>
                    }
                    {rating >= 1 ? (
                        <img src="/img/rating-beer-on.svg" alt="1" />
                    ) : rating >= 0.5 ? (
                        <img src="/img/rating-beer-half.svg" alt="1" />
                    ) : (
                                <img src="/img/rating-beer-off.svg" alt="1" />
                            )}
                    {rating >= 2 ? (
                        <img src="/img/rating-beer-on.svg" alt="1" />
                    ) : rating >= 1.5 ? (
                        <img src="/img/rating-beer-half.svg" alt="1" />
                    ) : (
                                <img src="/img/rating-beer-off.svg" alt="2" />
                            )}
                    {rating >= 3 ? (
                        <img src="/img/rating-beer-on.svg" alt="1" />
                    ) : rating >= 2.5 ? (
                        <img src="/img/rating-beer-half.svg" alt="1" />
                    ) : (
                                <img src="/img/rating-beer-off.svg" alt="3" />
                            )}
                    {rating >= 4 ? (
                        <img src="/img/rating-beer-on.svg" alt="1" />
                    ) : rating >= 3.5 ? (
                        <img src="/img/rating-beer-half.svg" alt="1" />
                    ) : (
                                <img src="/img/rating-beer-off.svg" alt="4" />
                            )}
                    {rating >= 5 ? (
                        <img src="/img/rating-beer-on.svg" alt="1" />
                    ) : rating >= 4.5 ? (
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