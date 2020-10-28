import { faCalendarCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppyButton from '../common/AppyButton';
import React, { Component } from 'react';

class PlaceListItem extends Component {
    render() {
        return (
            <div className="row appy--place-list-item">
                <div className="appy--col-3 appy--place-list-item-img-col">
                    <div className="appy--place-list-item-img" style={{ backgroundImage: "url('/img/malasana-tour.jpg')" }} >
                        {this.props.recommended &&
                            <div className="appy--place-list-item-recommended">
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        }
                        <div className={`appy--place-list-item-rating ${this.props.recommended && 'recommended'}`} style={{ borderRadius: '0px 0px 0px 4px' }}>
                            <span className="appy--place-list-item-rating-num">4.2</span>
                            <img src="/img/star-white-on.svg" alt="1" />
                            <img src="/img/star-white-on.svg" alt="2" />

                            <img src="/img/star-white-on.svg" alt="3" />

                            <img src="/img/star-white-on.svg" alt="4" />

                            <img src="/img/star-off.svg" alt="5" />
                        </div>
                    </div>
                </div>
                <div className="appy--col-7 appy--place-list-item-info">

                    <h3 className="appy--place-list-item-info-title">La Lata Cascorro</h3>
                    <p className="appy--place-list-item-info-description">Calle de Embajadores de los Reales, 1, 28012 Madrid, España</p>
                    <div className="row appy--place-list-item-schedule-price">
                        <div className="appy--col-1 appy--place-list-item-schedule-price-open-icon">
                            <FontAwesomeIcon icon={faCalendarCheck} />
                        </div>
                        <div className="appy--col-5 appy--place-list-item-schedule-price-schedule-info">Open Now</div>
                        <div className="appy--col-1 appy--place-list-item-schedule-price-price-icon">
                            <img src="/img/price-icon.svg" alt="Price" />
                        </div>
                        <div className="appy--col-5 appy--place-list-item-schedule-price-price-info">
                            <span>€€€</span>
                        </div>
                    </div>
                </div>

                <div className="appy--col-2 appy--place-list-item-position">
                    {this.props.type === 'num' ?
                        <p className="appy--place-list-item-position-num">1</p>
                        :
                        <p className="appy--place-list-item-position-num">
                            <AppyButton type="delete" />
                        </p>
                    }
                </div>
            </div>
        )
    }
}

export default PlaceListItem;