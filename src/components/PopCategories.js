import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaBullhorn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SecHead from './SecHead';

const PopCategories = () => {

    const popcat = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    return (
        <section className='scroll-here block'>
            <Container fluid>
                <Row>
                    <Col lg="12">
                        <SecHead
                            title="Popular Categories"
                            text="37 jobs live - 0 added today."
                            headversion ="heading"
                        />
                        <div className='cat-sec'>
                            <Row className='g-0'>
                                {
                                    popcat.map((ele, index) => {
                                        return <Col key={index} lg="3" md="3" sm="6">
                                            <div className="p-category">
                                                <a href="#" title="">
                                                    <FaBullhorn />
                                                    <span>Design, Art &amp; Multimedia</span>
                                                    <p>(22 open positions)</p>
                                                </a>
                                            </div>
                                        </Col>
                                    })
                                }
                            </Row>
                        </div>
                    </Col>
                    <Col md="12">
                        <div className="browse-all-cat">
                            <Link to="#">Browse All Categories</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PopCategories