import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWalking,
    faRoute,
    faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import ImageCanvas from "../common/ImageCanvas";
import { textLength } from '../../services/textLength'

export default function TourItem({ id, recommended, brand, place, tour, first }) {
    return (
        <div className={first ? 'appy--tours-item appy--tours-item-first' : 'appy--tours-item'}>
            <ImageCanvas
                id={id}
                recommended={recommended}
                brand={brand}
                place={place}
                tour={tour}
            />
            <div
                className={`appy--tours-item-distancebar ${brand}`}
            >
                <div className="appy--tours-item-distancebar-distante-tour">
                    <div className="appy--tours-item-distancebar-icon">
                        <FontAwesomeIcon icon={faWalking} />
                    </div>
                    <div className="appy--tours-item-distancebar-text">12 Km.</div>
                </div>
                <div className="appy--tours-item-distancebar-distante-tour">
                    <div className="appy--tours-item-distancebar-icon">
                        <FontAwesomeIcon icon={faStopwatch} />
                    </div>
                    <div className="appy--tours-item-distancebar-text">30 Min.</div>
                </div>
            </div>

            <div className="appy--tours-item-info">
                <h3 className="appy--tours-item-info-title">
                    {tour ? tour[id].name : "Loading"}
                </h3>
                <p className="appy--tours-item-info-description">
                    {tour ? textLength(tour[id].description, 60, 72, 94) : "Loading"}
                </p>
                <div className="appy--tours-item-info-creator">
                    <div className="appy--tours-item-info-creator-icon">
                        <FontAwesomeIcon icon={faRoute} />
                    </div>
                    <div className="appy--tours-item-info-creator-text">
                        Appy Hour Tours
                        </div>
                </div>
            </div>
        </div>
    );
}
