import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { BiLinkExternal, BiKey, BiPlus, BiMenu, BiX } from "react-icons/bi";
import { Link } from 'react-router-dom';
import LogoWhite from '../../images/logo-white.png';
import NavMenuItems from './NavMenuItems';

const MobileHeader = () => {
    const [activeMenu, setActiveMenu] = useState(false)
    return (
        <div className="responsive-header">
            <div className="responsive-menubar">
                <div className="res-logo">
                    <Link to="/">
                        <img src={LogoWhite} alt="" />
                    </Link>
                </div>
                <div className="menu-resaction">
                    <div onClick={() => setActiveMenu(!activeMenu)} className="res-openmenu"><BiMenu /> Menu</div>
                    <div className="res-closemenu active"><BiX /> Close</div>
                </div>
            </div>
            <div className="responsive-opensec" style={activeMenu ? { display: "block" } : { display: "none" }}>
                <div className="btn-extars">
                    <a href="#" title="" className="post-job-btn"><i className="la la-plus"></i>Post Jobs</a>
                    <ul className="account-btns">
                        <li className="signup-popup">
                            <Link to="/signup"><BiKey /> Sign Up</Link>
                        </li>
                        <li className="signin-popup">
                            <Link to="/login"><BiLinkExternal /> Login</Link>
                        </li>
                    </ul>
                </div>
                <form className="res-search">
                    <input type="text" placeholder="Job title, keywords or company name" />
                    <button type="submit"><i className="la la-search"></i></button>
                </form>
                <div className="responsivemenu">
                    <NavMenuItems />
                </div>
            </div>
        </div>
    )
}

export default MobileHeader