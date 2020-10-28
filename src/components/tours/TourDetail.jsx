import React, { Component } from 'react';
import InfoBar from '../infobar/InfoBar';
import ImageCanvas from '../common/ImageCanvas';
import PlaceInfo from '../places/PlaceInfo';
import PlaceListItem from '../places/PlaceListItem';

class TourDetail extends Component {
    render() {
        return (
            <div>
                <InfoBar back={true} />
                <div className="appy--tours-detail">
                    <div className="appy--tours-detail-map" style={{ backgroundImage: "url('./img/map-route.png'", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                </div>
                <PlaceListItem type="num" recommended={false} />
                <PlaceListItem type="num" recommended={true} />
                <PlaceListItem type="num" recommended={false} />
                <PlaceListItem type="num" recommended={false} />
                <PlaceListItem type="num" recommended={true} />
            </div>
        );
    }
}

export default TourDetail;