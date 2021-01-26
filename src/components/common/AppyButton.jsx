import { faMapMarkerAlt, faPen, faPlay, faPlus, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../infobar/InfoBar.jsx'
export default function AppyButton({ type, recommended, num, info, loading }) {
    return (
        loading ?
            <div className={`appy--button loading--background-default ${num && type === 'home' ? 'loading--background-default-delay5' : 'loading--background-default-delay3'} ${type === 'start' ? 'loading--background-default-delay4' : type === 'start' ? 'loading--background-default-delay6' : null} ${info && 'button-info'}`}></div>
            :
            <div className={type ?
                `appy--button appy--button-info   
                ${recommended ? 'recommended-btn' :
                    type === 'whatsapp' ? 'whatsapp-btn' :
                        type === 'facebook' ? 'facebook-btn' :
                            type === 'twitter' ? 'twitter-btn' : ''}` :
                `appy--button ${recommended ? 'recommended-btn' : null
                }`}>
                {
                    (type === 'crear' || type === 'añadir') ? <FontAwesomeIcon className="appy--button-icon" icon={faPlus} /> :
                        (type === 'editar') ? <FontAwesomeIcon className="appy--button-icon" icon={faPen} /> :
                            (type === 'guardar') ? <FontAwesomeIcon className="appy--button-icon" icon={faSave} /> :
                                (type === 'mapa') ? <FontAwesomeIcon className="appy--button-icon" icon={faMapMarkerAlt} /> :
                                    (type === 'borrar') ? <FontAwesomeIcon className="appy--button-icon" icon={faTrashAlt} /> :
                                        (type === 'seguir') ? <FontAwesomeIcon className="appy--button-icon" icon={faPlay} /> :
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
    );
}