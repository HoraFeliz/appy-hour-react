import React, { Component } from 'react';
import FooterNavbarItem from './FooterNavbarItem';

class FooterNavbar extends Component {
    render() {
        return (
            <div className="appy--footer-navbar">
                <FooterNavbarItem type="tours" />
                <FooterNavbarItem type="record" />
                <FooterNavbarItem type="create" />
            </div>
        );
    }
}

export default FooterNavbar;