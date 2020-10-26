import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faWalking, faRoute } from '@fortawesome/free-solid-svg-icons'
import TourImageCanvas from '../common/ImageCanvas';

class TourItem extends Component {

    render() {

        return (
            <div className="appy--tours-item">
                <TourImageCanvas recommended={this.props.recommended} brand={this.props.brand} place={this.props.place} />
                <div className={(this.props.brand === `recommended`) ?
                    `appy--tours-item-distancebar recommended` : `appy--tours-item-distancebar`}>
                    <div className="appy--tours-item-distancebar-distante-tour">
                        <div className="appy--tours-item-distancebar-icon">
                            <FontAwesomeIcon icon={faWalking} />
                        </div>
                        <div className="appy--tours-item-distancebar-text">
                            12 Km.
                            </div>
                    </div>
                    <div className="appy--tours-item-distancebar-distante-nearby">
                        <div className="appy--tours-item-distancebar-icon">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <div className="appy--tours-item-distancebar-text">
                            300 m.
                            </div>
                    </div>
                </div>

                <div className="appy--tours-item-info">
                    <h3 className="appy--tours-item-info-title">Mahou Historical Tour</h3>
                    <p className="appy--tours-item-info-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quibusdam perspiciatis.</p>
                    <div className="appy--tours-item-info-creator">
                        <div className="appy--tours-item-info-creator-icon"><FontAwesomeIcon icon={faRoute} /></div>
                        <div className="appy--tours-item-info-creator-text">Appy Hour Tours</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TourItem;

