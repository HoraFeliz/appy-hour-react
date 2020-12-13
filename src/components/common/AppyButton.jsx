import { faMapMarkerAlt, faPen, faPlay, faPlus, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import '../infobar/InfoBar'

export default function AppyButton({ type, recommended, num, info }) {
    return (
        <div className={type ?
            `appy--button appy--button-info  
                ${recommended ? 'recommended-btn' :
                type === 'whatsapp' ? 'whatsapp-btn' :
                    type === 'facebook' ? 'facebook-btn' :
                        type === 'twitter' ? 'twitter-btn' : ''}` :
            `appy--button ${recommended ? 'recommended-btn' : null
            }`}>
            {
                (type === 'create' || type === 'add') ? <FontAwesomeIcon className="appy--button-icon" icon={faPlus} /> :
                    (type === 'edit') ? <FontAwesomeIcon className="appy--button-icon" icon={faPen} /> :
                        (type === 'save') ? <FontAwesomeIcon className="appy--button-icon" icon={faSave} /> :
                            (type === 'map') ? <FontAwesomeIcon className="appy--button-icon" icon={faMapMarkerAlt} /> :
                                (type === 'delete') ? <FontAwesomeIcon className="appy--button-icon" icon={faTrashAlt} /> :
                                    (type === 'start') ? <FontAwesomeIcon className="appy--button-icon" icon={faPlay} /> :
                                        (type === 'whatsapp') ? <img className="appy--button-brand-whatsapp" name='whatsapp' src="/img/whatsapp-brands.svg" alt="Whatsapp" /> :
                                            (type === 'facebook') ? <img className="appy--button-brand" name='facebook' src="/img/facebook-f-brands.svg" alt="Facebook" /> :
                                                (type === 'twitter') ? <img className="appy--button-brand-twitter" name='twitter' src="/img/twitter-brands.svg" alt="Twitter" /> : null
            }

            {
                !num ?
                    <svg class="spinner" viewBox="0 0 50 50">
                        <circle class={recommended ? 'recommended-path' : 'path'} cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                    </svg>
                    :
                    (info) &&
                    <p className={num != 'info' ? 'appy--button-num' : 'appy--button-text'}><strong>{num != 'info' ? num : type}</strong></p>}
        </ div>
    );
}
