import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import BgImg from '../images/parallax1.jpg';

const InnerHeader = (props) => {
    return (
        <section className="overlape">
            <div className="block no-padding">
            <div className='fixed-bg layer color' style={{backgroundImage: `url(${BgImg})` }}></div>
                <Container fluid>
                    <Row>
                        <Col className='p-0'>
                            <div className="inner-header">
                                <h3>{props.title}</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default InnerHeader