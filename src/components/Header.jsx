import React from 'react';

const Header = () => {
  return (
    <header className='header'>
        <nav className='header-nav'>
            <a href="/">TEAM</a>
            <a href="/clients">CLIENTS</a>
            <a href="/baw-studio">BAW STUDIO</a>
            <a href="/services">SERVICES</a>
            <a href="/call-up">CALL UP</a>
        </nav>
    </header>
  );
}

export default Header;