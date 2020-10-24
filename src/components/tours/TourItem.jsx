import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faWalking, faRoute } from '@fortawesome/free-solid-svg-icons'

class TourItem extends Component {

    render() {

        return (
            <div className="appy--tours-item">
                <div className="appy--tours-item-image" style={{ backgroundImage: "url('https://fotos01.autofacil.es/2020/02/29/690x278/istock-1.jpg'" }}>
                    {(this.props.recommended) &&
                        <div className={`appy--tours-item-recommended-logo ${this.props.brand}`}>
                            {(this.props.brand === 'mahou') ? <img src="../../img/logo-mahou.svg" alt="Mahou" /> :
                                (this.props.brand === 'estrella') ? <img src="../../img/logo-estrella.svg" alt="Estrella" /> : null}

                        </div>}
                    <div className="appy--tours-item-rating">
                        <img className="appy--tours-item-rating-img" src="../../img/rating-beer-on.svg" alt="1" />
                        <img className="appy--tours-item-rating-img" src="../../img/rating-beer-on.svg" alt="2" />
                        <img className="appy--tours-item-rating-img" src="../../img/rating-beer-on.svg" alt="3" />
                        <img className="appy--tours-item-rating-img" src="../../img/rating-beer-half.svg" alt="4" />
                        <img className="appy--tours-item-rating-img" src="../../img/rating-beer-off.svg" alt="5" />
                    </div>
                </div>
                <div className={`appy--tours-item-distancebar ${this.props.brand}`}>
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
                    <p className="appy--tours-item-info-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quibusdam perspiciatis corporis vero dolore.</p>
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

