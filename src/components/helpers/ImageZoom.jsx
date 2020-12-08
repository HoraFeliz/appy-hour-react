import { faExpand, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

export default function ImageZoom({ zoom }) {

    const localImageZoom = localStorage.getItem('imageZoom');


    useEffect(() => {
        const imageZoom = document.querySelector('.appy--image-placeid-image-zoom')

        if (zoom !== 'inactive') {
            setTimeout(() => {
                imageZoom.classList.add('appy--image-placeid-image-zoom-delay');
            }, 1000)

            setTimeout(() => {
                imageZoom.classList.remove('appy--image-placeid-image-zoom-delay');
            }, 3000)

        }

    })

    return (
        <div >
            <div className="appy--image-placeid-image-zoom" >
                <FontAwesomeIcon icon={faImage} /> <span className="text pl-2">ZOOM</span>
            </div>
            <div className="appy--image-placeid-plus">
                <FontAwesomeIcon icon={faExpand} className="appy--image-placeid-plus-icon" />
            </div>
        </div>
    )
}
