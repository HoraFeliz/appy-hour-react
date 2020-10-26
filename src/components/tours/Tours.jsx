import React from 'react'
import TourBarInfo from './TourBarInfo'
import TourItem from './TourItem'
import ReactSwipe from 'react-swipe';
import Button from '../common/Button'

export default function Tours() {

    // let reactSwipeEl;

    return (
        <div>
            <TourBarInfo recommended={true}>
                <Button num="5" info={true} recommended={true} />
                <Button type="map" info={true} recommended={true} />
            </TourBarInfo>
            <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: false }}
            >
                <div style={{ display: 'inline-flex' }}>
                    <TourItem recommended={true} brand="mahou" />
                    <TourItem recommended={true} brand="recommended" />
                </div>
                <div style={{ display: 'inline-flex' }}>
                    <TourItem recommended={true} brand="recommended" />
                    <TourItem recommended={true} brand="recommended" />
                </div>
                <div style={{ display: 'inline-flex' }}>
                    <TourItem recommended={true} brand="recommended" />
                    <TourItem recommended={true} brand="recommended" />
                </div>
            </ReactSwipe>

            <TourBarInfo>
                <Button num="5" info={true} />
                <Button type="map" info={true} />
            </TourBarInfo>
            <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: false }}
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

    )
}
