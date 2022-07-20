import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";

import SecHead from './SecHead';
import BgImg from '../images/parallax1.jpg';
import ClientImg from '../images/clientimg.jpg';

const HappyCandidates = () => {
    const ReivewSlidersettings = {
        slidesToShow: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    centerMode: false,
                    centerPadding: '0px',
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    centerMode: true,
                    centerPadding: '0px',
                    dots: true
                }
            }
        ]
    };

    const [ReviewList, setReviewList] = useState([1, 2, 3, 4, 5, 6, 7]);
    return (
        <section>
            <div className="block">
                <div className='fixed-bg layer color light' style={{ backgroundImage: `url(${BgImg})` }}></div>
                <Container fluid>
                    <Row>
                        <Col>
                            <SecHead
                                title="Kind Words From Happy Candidates"
                                text="What other people thought about the service provided by Jobry"
                                headversion="heading light"
                            />
                            <Slider {...ReivewSlidersettings} className='reviews-sec slick-dotted'>
                                {
                                    ReviewList.map((ele, index) => {
                                        return <div key={index} className='reviewblock'>
                                            <div className="reviews">
                                                <img src={ClientImg} alt="" />
                                                <h3>Augusta Silva <span>Web designer</span></h3>
                                                <p>Without Jobry i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite believe the service</p>
                                            </div>
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

export default HappyCandidates