import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandArrowsAlt, faExternalLinkAlt, faEye, faPlusCircle, faSearchPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import BeerRating from './BeerRating';
// import { getPlaces } from '../../services/api-client';


class ImageCanvas extends Component {

    state = {
        totalRating: 0
    }

    handleZoom = () => {
        const image = document.getElementById('place-image')
        const plus = document.querySelector('.appy--image-placeid-plus')
        const plusIcon = document.querySelector('.appy--image-placeid-plus-icon')
        image.classList.toggle('appy--image-placeid-zoom')
        plusIcon.classList.toggle('appy--image-placeid-plus-icon-minus')
        plus.classList.toggle('appy--image-placeid-plus-click')

    }

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


            <div id="place-image" onClick={this.props.placeInfo && this.handleZoom} className={(this.props.place ? 'appy--image-placeid' : 'appy--tours-item-image')}
                style={{
                    backgroundImage: `url('${this.props.placeInfo ? this.props.placeInfo.image :
                        this.props.tour ? this.props.tour[this.props.id].image : null}')`
                }} >

                { this.recommended()}

                < BeerRating place={this.props.place} />
                {!this.props.tour &&
                    <div className="appy--image-placeid-plus">
                        <FontAwesomeIcon icon={faPlusCircle} className="appy--image-placeid-plus-icon" />
                    </div>
                }
            </div >
        );
    }
}




export default ImageCanvas;