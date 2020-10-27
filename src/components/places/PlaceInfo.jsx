import React, { Component } from 'react';
import StarRating from '../common/StarRating';
import PlaceListItem from './PlaceListItem';
import PlaceSchedule from './PlaceSchedule';

class PlaceInfo extends Component {
    render() {
        return (
            <div className="appy--place-item-info">
                <h2 className="appy--place-item-info-placename">La Lata de Cascorro</h2>
                <p className="appy--place-item-info-address"><strong>Address:</strong> Calle de San Andrés, 4, 28004 Madrid</p>
                <p className="appy--place-item-info-address">
                    <strong>Schedule:</strong> <span className="appy--place-item-info-address-open">Open Now</span> </p>

                <PlaceSchedule />
                <hr />
                <div className="appy--place-item-info-rating-container">
                    <div className="appy--row">
                        <div className="appy--col-6"><span className="appy--place-item-info-rating-text">Google Rating</span></div>
                        <div className="appy--col-6"><StarRating /></div>
                    </div>
                </div>
                <PlaceListItem />
            </div >
        )
    }
}

export default PlaceInfo;