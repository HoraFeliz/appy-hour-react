import { faChevronLeft, faRoute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppyButton from '../common/AppyButton';
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class InfoBar extends Component {
    render() {
        return (
            <div className="appy--infobar appy--primary-color">
                <NavLink className="appy--infobar-back appy--primary-color" to={`/tours`}>
                    <div className="appy--infobar-icon">
                        {this.props.back ? <FontAwesomeIcon icon={faChevronLeft} /> :
                            <FontAwesomeIcon icon={faRoute} />
                        }
                    </div>
                    <div className="appy--infobar-title">
                        <strong>{this.props.tour.name}</strong>
                    </div>
                </NavLink>
                <div className="appy--buttons-info">
                    <AppyButton num="6" info={true} />
                    <AppyButton type="start" info={true} />
                </div>
            </div>
        );
    }
}

export default InfoBar;