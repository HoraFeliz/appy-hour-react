import React from 'react'
import TourBarInfo from './TourBarInfo'
import TourItem from './TourItem'
import ReactSwipe from 'react-swipe';
import InfoButton from '../infobar/InfoButton';

export default function Tours() {

    // let reactSwipeEl;

    return (
        <div>
            <TourBarInfo recommended={true}>
                <InfoButton num="5" info={true} recommended={true} />
                <InfoButton type="map" info={true} recommended={true} />
            </TourBarInfo>
            <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: true }}
            // ref={el => (reactSwipeEl = el)}
            >
                <div style={{ display: 'inline-flex' }}>
                    <TourItem recommended={true} brand="mahou" />
                    <TourItem recommended={true} brand="estrella" />
                </div>
                <div style={{ display: 'inline-flex' }}>
                    <TourItem recommended={true} brand="mahou" />
                    <TourItem recommended={true} brand="estrella" />
                </div>
            </ReactSwipe>

            <TourBarInfo>
                <InfoButton num="5" info={true} />
                <InfoButton type="map" info={true} />
            </TourBarInfo>
            <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: false }}
                // ref={el => (reactSwipeEl = el)}
                widthOfSiblingSlidePreview="50px"
            >
                <div style={{ display: 'inline-flex' }}>
                    <TourItem />
                    <TourItem />
                </div>
                <div style={{ display: 'inline-flex' }}>
                    <TourItem />
                    <TourItem />
                </div>
                <div style={{ display: 'inline-flex' }}>
                    <TourItem />
                    <TourItem />
                </div>
            </ReactSwipe>
        </div>

        // <div>
        //     <TourBarInfo recommended={true} num="5" />

        //     <ToursList>
        //         <TourItem recommended={true} brand="mahou" />
        //         <TourItem recommended={true} brand="estrella" />
        //     </ToursList>

        //     <TourBarInfo num="15" />
        //     <ToursList>
        //         <TourItem />
        //         <TourItem />
        //     </ToursList>
        // </div>

    )
}
