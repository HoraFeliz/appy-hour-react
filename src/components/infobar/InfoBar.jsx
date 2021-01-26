import { faChevronLeft, faRoute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppyButton from '../common/AppyButton';
import React from 'react';
import { NavLink } from "react-router-dom";

export default function InfoBar({ tour, place, back, loading }) {
    return (
        <div className="appy--infobar appy--primary-color">
            {loading ?
                <>
                    <div className="appy--infobar-back">
                        <AppyButton loading={true} info={true} />
                    </div>
                    <div className="appy--buttons-info">
                        <AppyButton loading={true} num={true} />
                        <AppyButton loading={true} info={true} type={'start'} />
                    </div>
                </>

                :

                <>
                    <NavLink className="appy--infobar-back appy--primary-color" to={!place ? `/tour/${tour._id}` : `/tours`}>
                        <div className="appy--infobar-icon">
                            {back ? <FontAwesomeIcon icon={faChevronLeft} /> :
                                <FontAwesomeIcon icon={faRoute} />
                            }
                        </div>
                        <div className="appy--infobar-title">
                            <strong>{!place ? tour.name : 'Rutas'}</strong>
                        </div>
                    </NavLink>
                    <div className="appy--buttons-info">
                        {place &&
                            <>
                                <AppyButton num={place.length} info={true} />
                                <AppyButton num='info' type="seguir" info={true} />
                            </>
                        }
                    </div>
                </>
            }
        </div>
    );
}