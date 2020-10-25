import { faMapMarkerAlt, faPen, faPlus, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './InfoBar'

class InfoButton extends Component {
    render() {
        return (

            <div className={this.props.type ?
                `appy--button appy--button-info ${this.props.recommended && 'recommended-btn'}` :
                `appy--button ${this.props.recommended && 'recommended-btn'}`}>
                {
                    (this.props.type === 'create' || this.props.type === 'add') ? <FontAwesomeIcon className="appy--button-icon" icon={faPlus} /> :
                        (this.props.type === 'edit') ? <FontAwesomeIcon className="appy--button-icon" icon={faPen} /> :
                            (this.props.type === 'save') ? <FontAwesomeIcon className="appy--button-icon" icon={faSave} /> :
                                (this.props.type === 'map') ? <FontAwesomeIcon className="appy--button-icon" icon={faMapMarkerAlt} /> : null
                }

                {(this.props.info) &&
                    <p className={this.props.num ? 'appy--button-num' : 'appy--button-text'}><strong>{this.props.num ? this.props.num : this.props.type}</strong></p>}
            </ div>
        );
    }
}

export default InfoButton;