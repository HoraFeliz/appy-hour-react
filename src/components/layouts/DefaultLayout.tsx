import React from 'react';
import FooterNavbar from '../navigation/FooterNavbar';
import Navbar from '../navigation/Navbar';
import NavbarMenu from '../navigation/NavbarMenu';


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