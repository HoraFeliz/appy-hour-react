import { faChevronLeft, faRoute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppyButton from '../common/AppyButton';
import React, { Component } from 'react';

class InfoBar extends Component {
    render() {
        return (
            <div className="appy--infobar appy--primary-color">
                <div className="appy--infobar-icon">
                    {this.props.back ? <FontAwesomeIcon icon={faChevronLeft} /> :
                        <FontAwesomeIcon icon={faRoute} />
                    }
                </div>
                <div className="appy--infobar-title">
                    <strong>La Latina Tour</strong>
                </div>
                <div className="appy--buttons-info">
                    <AppyButton num="1" info={true} />
                    <AppyButton type="edit" />
                    <AppyButton type="save" info={true} />
                </div>
            </div>
        );
    }
}

export default InfoBar;