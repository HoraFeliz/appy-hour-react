import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faRoute } from '@fortawesome/free-solid-svg-icons'

export default function TourBarInfo({ recommended, children, loading }) {

    return (

        loading ?
            <div className="appy--tours-barinfo" style={recommended ? { marginTop: '15px' } : { marginTop: '25px' }}>
                <div className={`appy--tours-barinfo-title ${(recommended) && 'recommended-color'}`}>
                    <FontAwesomeIcon className={`appy--tours-barinfo-title-icon background-loading-gradient ${recommended && 'recommended'}`} icon={(recommended) ? faStar : faRoute} />
                    <div className="appy--tours-barinfo-title-loading background-loading-gradient"></div>
                </div>
                <div className="appy--tours-barinfo-info">
                    {children}
                </div>
            </div>
            :
            <>
                <div className="appy--tours-barinfo" style={recommended ? { marginTop: '15px' } : { marginTop: '25px' }}>
                    <div className={`appy--tours-barinfo-title ${(recommended) && 'recommended-color'}`}>
                        <FontAwesomeIcon className={`appy--tours-barinfo-title-icon ${recommended && 'recommended'}`} icon={(recommended) ? faStar : faRoute} />
                        <h5 className="appy--tours-barinfo-title-title">{(recommended) ? 'Recommended' : 'Near Tours'}</h5>
                    </div>
                    <div className="appy--tours-barinfo-info">
                        {children}
                    </div>
                </div>
            </>
    );
}