import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute, faCircle, faPlus } from '@fortawesome/free-solid-svg-icons'

class FooterNavbarItem extends Component {
    render() {
        return (
            <div className="appy--footer-navbar-item">
                <div className="appy--footer-navbar-item-icon">
                    <FontAwesomeIcon icon={
                        this.props.type === 'tours' ? faRoute :
                            this.props.type === 'record' ? faCircle :
                                this.props.type === 'create' ? faPlus : null
                    } />
                </div>
                <div className="appy--footer-navbar-item-text">{this.props.type}</div>
            </div>
        );
    }
}

export default FooterNavbarItem;