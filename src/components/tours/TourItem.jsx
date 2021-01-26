import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWalking,
    faRoute,
    faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import ImageCanvas from "../common/ImageCanvas";
import { textLength } from '../../services/textLength'

export default function TourItem({ id, recommended, brand, place, tour, first, loading }) {
    return (
        <>
            <div id={`${(first && recommended) ? 'appy--tours-item-first' : 'appy--tours-item-next'}`} className={loading ? `appy--tours-item ${first && 'first-item-loading'}` : `appy--tours-item`} >

                {loading ?
                    first ?
                        <ImageCanvas loading={true} first={true} />
                        :
                        <ImageCanvas loading={true} />

                    :
                    <ImageCanvas
                        id={id}
                        recommended={recommended}
                        brand={brand}
                        place={place}
                        tour={tour}
                    />
                }

                {loading ?

                    <div
                        className={`appy--tours-item-distancebar appy--tours-item-distancebar-loading  `}
                    >
                        <div className="appy--tours-item-distancebar-distante-tour">
                            <div className={`appy--tours-item-distancebar-text appy--tours-item-distancebar-text-loading loading--background-default ${!first && 'loading--background-default-delay4'}`}></div>
                        </div>
                        <div className="appy--tours-item-distancebar-distante-tour">
                            <div className={`appy--tours-item-distancebar-text appy--tours-item-distancebar-text-loading loading--background-default ${first ? 'loading--background-default-delay3' : 'loading--background-default-delay6'} `}></div>
                        </div>


                    </div>

                    :

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

                }

                <div className="appy--tours-item-info">
                    <h3 className="appy--tours-item-info-title">
                        {tour ? tour[id].name :

                            <div className={`appy--tours-item-info-title appy--tours-item-info-title-loading loading--background-default ${!first && 'loading--background-default-delay4'}`}></div>

                        }
                    </h3>
                    <div className="appy--tours-item-info-description">
                        {tour ? textLength(tour[id].description, 40, 55, 65) :

                            <>
                                <div className={`appy--tours-item-info-description-loading loading--background-default ${!first && 'loading--background-default-delay4'}`}></div>
                                <div className={`appy--tours-item-info-description-loading loading--background-default ${!first && 'loading--background-default-delay4'}`}></div>
                                <div className={`appy--tours-item-info-description-loading loading--background-default ${!first && 'loading--background-default-delay4'}`} style={{ width: '60%' }}></div>
                            </>

                        }
                    </div>

                    {loading ?
                        <div className="appy--tours-item-info-creator">
                            <div className={`appy--tours-item-info-creator-icon appy--tours-item-info-creator-icon-loading loading--background-default ${!first && 'loading--background-default-delay4'}`}>
                            </div>
                            <div className={`appy--tours-item-info-creator-text appy--tours-item-info-creator-text-loading loading--background-default ${!first && 'loading--background-default-delay4'}`}>
                            </div>
                        </div>
                        :
                        <div className="appy--tours-item-info-creator">
                            <div className="appy--tours-item-info-creator-icon">
                                <FontAwesomeIcon icon={faRoute} />
                            </div>
                            <div className="appy--tours-item-info-creator-text">
                                Appy Hour Tours
                            </div>
                        </div>

                    }
                </div>
            </div>
        </>
    );
}
