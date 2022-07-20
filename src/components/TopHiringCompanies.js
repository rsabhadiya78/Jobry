import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";

import SecHead from './SecHead';
import HiringLogo from '../images/cc1.jpg'

const TopHiringCompanies = () => {
    const TopHiringSlider = {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        slide: 'div',
        fade: false,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };

    const [HiringCompanyList, setHiringCompanyList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <section>
            <div className='block'>
                <Container fluid>
                    <Row>
                        <Col>
                            <SecHead
                                title="Top Hiring Companies"
                                text="Some of the companies we've helped recruit excellent applicants over the years."
                                headversion="heading"
                            />
                            <Slider {...TopHiringSlider} className='comp-sec slick-dotted'>
                                {
                                    HiringCompanyList.map((ele, index) => {
                                        return <div key={index} className="company-img">
                                            <a href="#" title="">
                                                <img src={HiringLogo} alt="" />                                            </a>
                                        </div>
                                    })
                                }
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default TopHiringCompanies