import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faPlusCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import BeerRating from './BeerRating';
import ImageZoom from './ImageZoom';
// import { getPlaces } from '../../services/api-client';


export default function ImageCanvas({ place, recommended, brand, placeInfo, tour, id }) {

    const handleZoom = () => {
        const image = document.getElementById('place-image')
        const plus = document.querySelector('.appy--image-placeid-plus')
        const plusIcon = document.querySelector('.appy--image-placeid-plus-icon')
        const plusText = document.querySelector('.appy--image-placeid-image-zoom')
        image.classList.toggle('appy--image-placeid-zoom')
        plusIcon.classList.toggle('appy--image-placeid-plus-icon-minus')
        plusText.classList.toggle('appy--image-placeid-image-zoom-minus')
        plus.classList.toggle('appy--image-placeid-plus-click')
        // this.setState({ imageZoom: false })
        localStorage.setItem('imageZoom', 'inactive')
    }

    const Recommended = () => {
        if (place && recommended) {
            return (
                <div className="appy--image-placeid-recommended">
                    <FontAwesomeIcon icon={faStar} />
                    <span className="appy--image-placeid-recommended text">RECOMMENDED</span>
                </div>
            )
        }

        if (recommended) {
            return (
                <div className={`appy--image-tours-recommended ${brand}`}>
                    {(brand === 'mahou') ? <img src="../../img/logo-mahou.svg" alt="Mahou" /> :
                        (brand === 'estrella') ? <img src="../../img/logo-estrella.svg" alt="Estrella" /> :
                            (brand === 'recommended') ? <FontAwesomeIcon icon={faStar} /> : null
                    }
                </div>
            )
        }
    }


    // this.state.imageZoom = localStorage.getItem('imageZoom');
    // console.log(this.state.imageZoom);

    return (


        <div id="place-image" onClick={placeInfo && handleZoom} className={(place ? 'appy--image-placeid' : 'appy--tours-item-image')}
            style={{
                backgroundImage: `url('${placeInfo ? placeInfo.image :
                    tour ? tour[id].image : null}')`
            }} >

            { Recommended()}

            < BeerRating place={place} rating={Math.floor(Math.random() * 3) + 3} />
            {!tour &&
                <ImageZoom zoom={localStorage.getItem('imageZoom')} />
            }
        </div >
    );
}
