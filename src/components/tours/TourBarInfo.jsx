import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMapMarkerAlt, faRoute } from '@fortawesome/free-solid-svg-icons'

class TourBarInfo extends Component {

    render() {

        return (
            <div className="appy--tours-barinfo">
                <div className={`appy--tours-barinfo-title ${(this.props.recommended) ? 'recommended-color' : null}`}>
                    <FontAwesomeIcon className="appy--tours-barinfo-title-icon" icon={(this.props.recommended) ? faStar : faRoute} />
                    <h5 className="appy--tours-barinfo-title-title">{(this.props.recommended) ? 'Recommended' : 'Near Tour'}</h5>
                </div>
                <div className="appy--tours-barinfo-info">
                    <div className={`appy--tours-barinfo-info-num ${(this.props.recommended) ? 'recommended' : null}`}><strong>5</strong></div>
                    <div className={`appy--tours-barinfo-info-map ${(this.props.recommended) ? 'recommended' : null}`}><FontAwesomeIcon icon={faMapMarkerAlt} /> Map</div>
                </div>
            </div>
        );
    }
}

export default TourBarInfo;