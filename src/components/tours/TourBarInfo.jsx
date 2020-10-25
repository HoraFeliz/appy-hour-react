import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faRoute } from '@fortawesome/free-solid-svg-icons'

class TourBarInfo extends Component {

    render() {

        return (
            <div className="appy--tours-barinfo">
                <div className={`appy--tours-barinfo-title ${(this.props.recommended) && 'recommended-title'}`}>
                    <FontAwesomeIcon className="appy--tours-barinfo-title-icon" icon={(this.props.recommended) ? faStar : faRoute} />
                    <h5 className="appy--tours-barinfo-title-title">{(this.props.recommended) ? 'Recommended' : 'Near Tours'}</h5>
                </div>
                <div className="appy--tours-barinfo-info">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default TourBarInfo;