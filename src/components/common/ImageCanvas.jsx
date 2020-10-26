import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import BeerRating from './BeerRating';


class TourImageCanvas extends Component {

    recommended = () => {
        if (this.props.place && this.props.recommended) {
            return (
                <div className="appy--image-placeid-recommended">
                    <FontAwesomeIcon icon={faStar} />
                    <span className="appy--image-placeid-recommended text">RECOMMENDED</span>
                </div>
            )
        }

        if (this.props.recommended) {
            return (
                <div className={`appy--image-tours-recommended ${this.props.brand}`}>
                    {(this.props.brand === 'mahou') ? <img src="../../img/logo-mahou.svg" alt="Mahou" /> :
                        (this.props.brand === 'estrella') ? <img src="../../img/logo-estrella.svg" alt="Estrella" /> :
                            (this.props.brand === 'recommended') ? <FontAwesomeIcon icon={faStar} /> : null
                    }
                </div>
            )
        }
    }

    render() {

        return (

            <div className={this.props.place ? 'appy--image-placeid' : 'appy--tours-item-image'} style={{ backgroundImage: "url('./img/malasana-tour.jpg'" }}>
                {this.recommended()}

                <BeerRating place={this.props.place} />
            </div>
        );
    }
}




export default TourImageCanvas;