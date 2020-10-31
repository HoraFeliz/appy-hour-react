import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWalking,
    faRoute,
    faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import TourImageCanvas from "../common/ImageCanvas";

class TourItem extends Component {
    render() {
        return (
            <div className={this.props.first ? 'appy--tours-item appy--tours-item-first' : 'appy--tours-item'}>
                <TourImageCanvas
                    recommended={this.props.recommended}
                    brand={this.props.brand}
                    place={this.props.place}
                />
                <div
                    className={`appy--tours-item-distancebar ${this.props.brand}`}
                >
                    <div className="appy--tours-item-distancebar-distante-tour">
                        <div className="appy--tours-item-distancebar-icon">
                            <FontAwesomeIcon icon={faWalking} />
                        </div>
                        <div className="appy--tours-item-distancebar-text">12 Km.</div>
                    </div>
                    <div className="appy--tours-item-distancebar-distante-tour">
                        <div className="appy--tours-item-distancebar-icon">
                            <FontAwesomeIcon icon={faStopwatch} />
                        </div>
                        <div className="appy--tours-item-distancebar-text">30 Min.</div>
                    </div>
                </div>

                <div className="appy--tours-item-info">
                    <h3 className="appy--tours-item-info-title">
                        {this.props.tour ? this.props.tour.name : "Loading"}
                    </h3>
                    <p className="appy--tours-item-info-description">
                        {this.props.tour ? this.props.tour.description : "Loading"}
                    </p>
                    <div className="appy--tours-item-info-creator">
                        <div className="appy--tours-item-info-creator-icon">
                            <FontAwesomeIcon icon={faRoute} />
                        </div>
                        <div className="appy--tours-item-info-creator-text">
                            Appy Hour Tours
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TourItem;
