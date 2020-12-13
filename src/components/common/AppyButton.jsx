import { faMapMarkerAlt, faPen, faPlay, faPlus, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../infobar/InfoBar'
export default function AppyButton({ type, recommended, num, info, loading }) {
    return (
        loading ?
            <div className={`appy--button background-loading-gradient ${info && 'button-info'}`}></div>
            :
            <>
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
                                                (type === 'whatsapp') ? <img className="appy--button-brand-whatsapp" src="/img/whatsapp-brands.svg" alt="Whatsapp" /> :
                                                    (type === 'facebook') ? <img className="appy--button-brand" src="/img/facebook-f-brands.svg" alt="Facebook" /> :
                                                        (type === 'twitter') ? <img className="appy--button-brand-twitter" src="/img/twitter-brands.svg" alt="Twitter" /> : null
                    }
                    {
                        loading ?
                            <p className='appy--button-num'><strong></strong></p>
                            :
                            (info) &&
                            <p className={num !== 'info' ? 'appy--button-num' : 'appy--button-text'}><strong>{num !== 'info' ? num : type}</strong></p>}
                </ div>
            </>
    );
}