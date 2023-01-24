import React from 'react';
import { socialLinks } from '../data';

import logo from '../images/logo.svg';
import PageLinks from './PageLinks';
import { SocialLink } from './SocialLink';

export const NavBar = () => {
    return (

        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <PageLinks parentClass="nav-links" itemClass="nav-link" />

                <ul className="nav-icons">

                    {
                        socialLinks.map(link => <SocialLink itemClass="nav-icon" {...link} key={link.id} />)
                    }

                </ul>
            </div>
        </nav>

    )
}
