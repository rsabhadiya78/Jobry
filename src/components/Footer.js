import React from 'react'
import { FaArrowUp, FaBehance, FaFacebookF, FaLinkedinIn, FaPinterest, FaTwitter } from 'react-icons/fa'

import LogoWhite from '../images/logo-white.png';
import AppStoreLogo from '../images/app-store.png';
import PlayStoreLogo from '../images/play-store.png';

const Footer = () => {
    return (
        <footer>
            <div className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 column">
                            <div className="widget">
                                <div className="about_widget">
                                    <div className="logo">
                                        <a href="index.html" title=""><img src={LogoWhite} alt="" /></a>
                                    </div>
                                    <span>Collin Street West, Victor 8007, Australia.</span>
                                    <span>+1 246-345-0695</span>
                                    <span>info@jobry.com</span>
                                    <div className="social">
                                        <a href="#" title="">
                                            <FaFacebookF />
                                        </a>
                                        <a href="#" title="">
                                            <FaTwitter />
                                        </a>
                                        <a href="#" title="">
                                            <FaLinkedinIn />
                                        </a>
                                        <a href="#" title="">
                                            <FaPinterest />
                                        </a>
                                        <a href="#" title="">
                                            <FaBehance />
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- About Widget --> */}
                            </div>
                        </div>
                        <div className="col-lg-4 column">
                            <div className="widget">
                                <h3 className="footer-title">Frequently Asked Questions</h3>
                                <div className="link_widgets">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <a href="#" title="">Privacy &amp; Seurty </a>
                                            <a href="#" title="">Terms of Serice</a>
                                            <a href="#" title="">Communications </a>
                                            <a href="#" title="">Referral Terms </a>
                                            <a href="#" title="">Lending Licnses </a>
                                            <a href="#" title="">Disclaimers </a>
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="#" title="">Support </a>
                                            <a href="#" title="">How It Works </a>
                                            <a href="#" title="">For Employers </a>
                                            <a href="#" title="">Underwriting </a>
                                            <a href="#" title="">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 column">
                            <div className="widget">
                                <h3 className="footer-title">Find Jobs</h3>
                                <div className="link_widgets">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <a href="#" title="">US Jobs</a>
                                            <a href="#" title="">Canada Jobs</a>
                                            <a href="#" title="">UK Jobs</a>
                                            <a href="#" title="">Emplois en Fnce</a>
                                            <a href="#" title="">Jobs in Deuts</a>
                                            <a href="#" title="">Vacatures China</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 column">
                            <div className="widget">
                                <div className="download_widget">
                                    <a href="#" title="">
                                        <img src={AppStoreLogo} />
                                    </a>
                                    <a href="#" title="">
                                        <img src={PlayStoreLogo} /> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-line">
                <span>© 2022 Jobry All rights reserved. Design by Jobry Infotech</span>
                <a href="#scrollup" className="scrollup" title="">
                    <FaArrowUp />
                </a>
            </div>
        </footer>

    )
}

export default Footer