import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BiLinkExternal, BiKey, BiPlus, BiMenu, BiX } from "react-icons/bi";

import Logo from '../images/logo.png';
import LogoWhite from '../images/logo-white.png';
import NavMenuItems from './HeaderComp/NavMenuItems';
import MobileHeader from './HeaderComp/MobileHeader';
import { Link } from 'react-router-dom';

const Header = () => {

    // Sticky Header Function
    const [stickyHeader, setStickyHeader] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setStickyHeader(window.scrollY > 96);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            <MobileHeader />
            <header className={stickyHeader ? "stick-top forsticky sticky " : "stick-top forsticky"}>
                <div className="menu-sec">
                    <Container className=''>
                        <div className="logo">
                            <Link to="/">
                                <img className="hidesticky" src={LogoWhite} alt="" />
                                <img className="showsticky" src={Logo} alt="" />
                            </Link>
                        </div>
                        {/* <!-- Logo --> */}
                        <div className="btn-extars">
                            <a href="#" title="" className="post-job-btn"><BiPlus /> Post Jobs</a>
                            <ul className="account-btns">
                                <li className="signup-popup">
                                    <Link to="/signup"><BiKey /> Sign Up</Link>
                                </li>
                                <li className="signin-popup">
                                    <Link to="/login"><BiLinkExternal /> Login</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Btn Extras --> */}
                        <nav>
                            <NavMenuItems />
                        </nav>
                        {/* <!-- Menus --> */}
                    </Container>
                </div>
            </header>
        </>
    )
}

export default Header