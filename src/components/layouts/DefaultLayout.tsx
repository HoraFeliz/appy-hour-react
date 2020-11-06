import React from 'react';
import FooterNavbarContainer from '../navbar/FooterNavbarContainer';
import Navbar from '../navbar/Navbar';
import NavbarMenu from '../navbar/NavbarMenu';

const DefaultLayout: React.FC = ({ children }) => (
    <div>
        <header className="App-header">
            <Navbar />
            <NavbarMenu />
            <FooterNavbarContainer />
        </header>
        <main className="App-main">
            {children}
        </main>
    </div>
)
export default DefaultLayout;