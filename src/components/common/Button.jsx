import { faMapMarkerAlt, faPen, faPlus, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import '../infobar/InfoBar'

class InfoButton extends Component {
    render() {
        return (

            <div className={this.props.type ?
                `appy--button appy--button-info 
                ${this.props.recommended ? 'recommended-btn' :
                    this.props.type === 'whatsapp' ? 'whatsapp-btn' :
                        this.props.type === 'facebook' ? 'facebook-btn' : ''}` :
                `appy--button ${this.props.recommended ? 'recommended-btn' : null
                }`}>
                {
                    (this.props.type === 'create' || this.props.type === 'add') ? <FontAwesomeIcon className="appy--button-icon" icon={faPlus} /> :
                        (this.props.type === 'edit') ? <FontAwesomeIcon className="appy--button-icon" icon={faPen} /> :
                            (this.props.type === 'save') ? <FontAwesomeIcon className="appy--button-icon" icon={faSave} /> :
                                (this.props.type === 'map') ? <FontAwesomeIcon className="appy--button-icon" icon={faMapMarkerAlt} /> :
                                    (this.props.type === 'delete') ? <FontAwesomeIcon className="appy--button-icon" icon={faTrashAlt} /> :
                                        (this.props.type === 'whatsapp') ? <img className="appy--button-brand" src="/img/whatsapp-brands.svg" alt="Whatsapp" /> :
                                            (this.props.type === 'facebook') ? <img className="appy--button-brand" src="/img/facebook-f-brands.svg" alt="Facebook" /> : null
                }

                {(this.props.info) &&
                    <p className={this.props.num ? 'appy--button-num' : 'appy--button-text'}><strong>{this.props.num ? this.props.num : this.props.type}</strong></p>}
            </ div>
        );
    }
}

export default InfoButton;