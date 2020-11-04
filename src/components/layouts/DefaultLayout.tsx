import React from 'react';
import FooterNavbar from '../navbar/FooterNavbar';
import Navbar from '../navbar/Navbar';
import NavbarMenu from '../navbar/NavbarMenu';

const DefaultLayout: React.FC = ({ children }) => (
    <div>
        <header className="App-header">
            <Navbar />
            <NavbarMenu />
            <FooterNavbar />
        </header>
        <main className="App-main">
            {children}
        </main>
    </div>
)
export default DefaultLayout;