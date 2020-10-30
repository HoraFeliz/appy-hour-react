import React, { Component } from 'react';
import InfoBar from '../infobar/InfoBar';
import ImageCanvas from '../common/ImageCanvas';
import PlaceInfo from './PlaceInfo';
import { getPlaces } from '../../services/api-client';

class PlaceId extends Component {
    state = {
        places: [],
    };

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.fetchPlaces();
    }
    fetchPlaces = () => {
        getPlaces(this.props.match.params.id).then((places) => {
            console.log(places);
            console.log('object');
            this.setState({ places });
        });
    };

    render() {
        return (
            <div>
                <InfoBar back={true} tour={{ name: 'hola' }} />
                <div className="appy--place-item">
                    <div className="appy--place-item-map" style={{ backgroundImage: "url('./img/map-place.png'", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <p>{this.state.places.name}</p>
                    <ImageCanvas place={true} recommended={true} />
                    <PlaceInfo />
                </div>
            </div>
        );
    }
}

export default PlaceId;