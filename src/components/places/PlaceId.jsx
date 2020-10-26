import React, { Component } from 'react';
import InfoBar from '../infobar/InfoBar';
import ImageCanvas from '../common/ImageCanvas';
import PlaceInfo from './PlaceInfo';

class PlaceId extends Component {
    render() {
        return (
            <div>
                <InfoBar back={true} />
                <div className="appy--place-item">
                    <div className="appy--place-item-map" style={{ backgroundImage: "url('./img/map-captura.png'", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <ImageCanvas place={true} recommended={true} />
                    <PlaceInfo />
                </div>
            </div>
        );
    }
}

export default PlaceId;