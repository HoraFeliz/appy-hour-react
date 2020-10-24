import React from 'react'
import TourBarInfo from './TourBarInfo'
import TourItem from './TourItem'
import ToursList from './ToursList'

export default function Tours() {
    return (
        <div>
            <TourBarInfo recommended={true} />
            <ToursList>
                <TourItem recommended={true} brand="mahou" />
                <TourItem recommended={true} brand="estrella" />
            </ToursList>

            <TourBarInfo />
            <ToursList>
                <TourItem />
                <TourItem />
            </ToursList>

            <TourBarInfo />
            <ToursList>
                <TourItem />
                <TourItem />
            </ToursList>
        </div>

    )
}
