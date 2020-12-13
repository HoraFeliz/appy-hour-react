import React from 'react';

export default function StarRating({ place }) {
    console.log('place star:', place.rating);
    return (
        <div className="appy--star-rating">
            <span className="appy--image-placeid-rating-num">{place.rating}</span>
            {place.rating >= 1 ? (
                <img src="/img/star-on.svg" alt="1" />
            ) : place.rating >= 0.5 ? (
                <img src="/img/star-half.svg" alt="1" />
            ) : (
                        <img src="/img/star-off.svg" alt="1" />
                    )}
            {place.rating >= 2 ? (
                <img src="/img/star-on.svg" alt="1" />
            ) : place.rating >= 1.5 ? (
                <img src="/img/star-half.svg" alt="1" />
            ) : (
                        <img src="/img/star-off.svg" alt="2" />
                    )}
            {place.rating >= 3 ? (
                <img src="/img/star-on.svg" alt="1" />
            ) : place.rating >= 2.5 ? (
                <img src="/img/star-half.svg" alt="1" />
            ) : (
                        <img src="/img/star-off.svg" alt="3" />
                    )}
            {place.rating >= 4 ? (
                <img src="/img/star-on.svg" alt="1" />
            ) : place.rating >= 3.5 ? (
                <img src="/img/star-half.svg" alt="1" />
            ) : (
                        <img src="/img/star-off.svg" alt="4" />
                    )}
            {place.rating >= 5 ? (
                <img src="/img/star-on.svg" alt="1" />
            ) : place.rating >= 4.5 ? (
                <img src="/img/star-half.svg" alt="1" />
            ) : (
                        <img src="/img/star-off.svg" alt="5" />
                    )}
        </div>
    );
}