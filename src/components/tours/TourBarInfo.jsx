import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faRoute } from '@fortawesome/free-solid-svg-icons'

export default function TourBarInfo({ recommended, children, loading }) {

    return (

        loading ?
            <div className="appy--tours-barinfo" style={recommended ? { marginTop: '15px' } : { marginTop: '25px' }}>
                <div className={`appy--tours-barinfo-title ${(recommended) && 'recommended-color'}`}>
                    <FontAwesomeIcon className={`appy--tours-barinfo-title-icon loading--background-default ${recommended && 'recommended'}`} icon={(recommended) ? faStar : faRoute} />
                    <div className="appy--tours-barinfo-title-loading loading--background-default loading--background-default-delay1"></div>
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
                        <h5 className="appy--tours-barinfo-title-title">{(recommended) ? 'Recomendadas' : 'Cercanas'}</h5>
                    </div>
                    <div className="appy--tours-barinfo-info">
                        {children}
                    </div>
                </div>
            </>
    );
}