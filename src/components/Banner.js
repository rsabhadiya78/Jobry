import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { BiSearchAlt,BiDownArrowAlt } from "react-icons/bi";
import { FaRegKeyboard } from "react-icons/fa";
import Select from 'react-select';

import vectorImg from '../images/vectorimg.png';

const JobLocations = [
    { value: 'New York', label: 'New York' },
    { value: 'Istanbul', label: 'Istanbul' },
    { value: 'London', label: 'London' },
    { value: 'Russia', label: 'Russia' },
];

const Banner = () => {
    return (
        <section>
            <div className="block no-padding">
                <Container className='p-0' fluid>
                    <Row>
                        <Col lg="12">
                            <div className="main-featured-sec">
                                <div className="new-slide">
                                    <img src={vectorImg} />
                                </div>
                                <div className="job-search-sec">
                                    <div className="job-search">
                                        <h3>The Easiest Way to Get Your New Job</h3>
                                        <span>Find Jobs, Employment & Career Opportunities</span>
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-7 col-md-5 col-sm-12 col-xs-12">
                                                    <div className="job-field">
                                                        <input type="text" className='from-control' placeholder="Job title, keywords or company name" />
                                                        <FaRegKeyboard />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                                                    <div className="job-field">
                                                        <Select Clearable options={JobLocations} className="joblocations h-100" placeholder="City, province or region"/>
                                                        <i className="la la-map-marker"></i>
                                                    </div>
                                                </div>
                                                <div className="col-lg-1 col-md-2 col-sm-12 col-xs-12">
                                                    <button type="submit">
                                                        <BiSearchAlt />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="or-browser">
                                            <span>Browse job offers by</span>
                                            <a href="#" title="">Category</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="scroll-to">
                                    <a href="#" title=""><BiDownArrowAlt /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Banner