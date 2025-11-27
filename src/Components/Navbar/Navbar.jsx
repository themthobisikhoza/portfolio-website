import React, { useState, useEffect } from 'react';
import Logo from '../../../src/assets/icons/logo.png';
import {
    CCollapse, CContainer, CNavbar, CNavbarBrand,
    CNavbarNav, CNavbarToggler, CNavItem, CNavLink,
} from '@coreui/react';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10); // add blur after 10px scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <CNavbar
            expand="lg"
            className={`navbar-sticky bg-body-transparent text-white ${scrolled ? 'navbar-blur' : ''}`}
        >
            <CContainer fluid>
                <CNavbarToggler onClick={() => setVisible(!visible)} />
                <CNavbarBrand href="#" className='mx-4 my-3'>
                    <img src={Logo} alt="MTHO." width="70" height="70" />
                </CNavbarBrand>
                <CCollapse className="navbar-collapse justify-content-end" visible={visible}>
                    <CNavbarNav>
                        <CNavItem>
                            <CNavLink href="#about" className="mx-5 mt-3 text-white">ABOUT ME</CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#skills" className="mx-5 mt-3 text-white">SKILLS</CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#projects" className="mx-5 mt-3 text-white">PROJECTS</CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#contact" className="mx-5 mt-3 text-white">LET'S YAP</CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <button className="round-outline-btn">
                                <a
                                    href="/Mthobisi Khoza.pdf"
                                    download
                                    style={{ color: "inherit", textDecoration: "none" }}
                                >
                                    DOWNLOAD CV
                                </a>
                            </button>
                        </CNavItem>
                    </CNavbarNav>
                </CCollapse>
            </CContainer>
        </CNavbar>
    );
};

export default Navbar;
