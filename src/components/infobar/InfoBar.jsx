import { faChevronLeft, faRoute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppyButton from '../common/AppyButton';
import React from 'react';
import { NavLink } from "react-router-dom";

export default function InfoBar({ tour, place, back }) {
    return (
        <div className="appy--infobar appy--primary-color">
            <NavLink className="appy--infobar-back appy--primary-color" to={!place ? `/tour/${tour._id}` : `/tours`}>
                <div className="appy--infobar-icon">
                    {back ? <FontAwesomeIcon icon={faChevronLeft} /> :
                        <FontAwesomeIcon icon={faRoute} />
                    }
                </div>
                <div className="appy--infobar-title">
                    <strong>{!place ? tour.name : 'Tours'}</strong>
                </div>
            </NavLink>
            <div className="appy--buttons-info">
                {place &&
                    <AppyButton num={place.length} info={true} />
                }
                {place &&
                    <AppyButton num='info' type="start" info={true} />
                }
            </div>
        </div>
    );
}