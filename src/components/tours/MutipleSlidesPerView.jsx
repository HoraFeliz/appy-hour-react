
import React from 'react';
import Swiper from 'react-id-swiper';
import TourItem from './TourItem';
import 'swiper/swiper.scss';

const MutipleSlidesPerView = (props) => {
    const params = {
        slidesPerView: 2,
        spaceBetween: 5,
        freeMode: true,
        // freeModeMinimumVelocity: 0.7,
        followFinger: true,
        freeModeMomentumVelocityRatio: 1,
        freeModeMomentumRatio: 0.15,
        freeModeMomentumBounceRatio: 0.1,
        freeModeSticky: true,
        speed: 100,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        //     type: 'bullets',
        //     dynamicBullets: true
        // }
    }
    return (

        <Swiper {...params}>
            <div>1
                <TourItem
                    key={props.key}
                    tour={props.tour}
                    recommended={true}
                    brand="recommended"
                    first={props.key === 0 ? true : false}
                />
            </div>
            <div>2
                <TourItem
                    key={props.key}
                    tour={props.tour}
                    recommended={true}
                    brand="recommended"
                    first={props.key === 0 ? true : false}
                />
            </div>
            <div>3
                <TourItem
                    key={props.key}
                    tour={props.tour}
                    recommended={true}
                    brand="recommended"
                    first={props.key === 0 ? true : false}
                />
            </div>
            <div>4
                <TourItem
                    key={props.key}
                    tour={props.tour}
                    recommended={true}
                    brand="recommended"
                    first={props.key === 0 ? true : false}
                />
            </div>
            <div>5
                <TourItem
                    key={props.key}
                    tour={props.tour}
                    recommended={true}
                    brand="recommended"
                    first={props.key === 0 ? true : false}
                />
            </div>
            <div>6
                <TourItem
                    key={props.key}
                    tour={props.tour}
                    recommended={true}
                    brand="recommended"
                    first={props.key === 0 ? true : false}
                />
            </div>
            <div>7
                <TourItem
                    key={props.key}
                    tour={props.tour}
                    recommended={true}
                    brand="recommended"
                    first={props.key === 0 ? true : false}
                />
            </div>
            <div>8
                <TourItem
                    key={props.key}
                    tour={props.tour}
                    recommended={true}
                    brand="recommended"
                    first={props.key === 0 ? true : false}
                />
            </div>

        </Swiper>
    )
};
export default MutipleSlidesPerView;