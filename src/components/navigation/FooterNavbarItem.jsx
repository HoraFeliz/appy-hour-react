import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute, faCircle, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function FooterNavbarItem({ type }) {
    return (
        <div className="appy--footer-navbar-item">
            <div className="appy--footer-navbar-item-icon">
                <FontAwesomeIcon icon={
                    type === 'tours' ? faRoute :
                        type === 'record' ? faCircle :
                            type === 'create' ? faPlus : null
                } />
            </div>
            <div className="appy--footer-navbar-item-text">{type}</div>
        </div>
    );
}