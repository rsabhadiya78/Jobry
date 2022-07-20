import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import BgImg from '../images/parallax1.jpg';

const CalltoAction = () => {
    return (
        <section>
            <div className="block double-gap-top double-gap-bottom">
                <div className='fixed-bg layer color' style={{backgroundImage: `url(${BgImg})` }}></div>
                <Container className="container">
                    <Row className="row">
                        <Col className="col-lg-12">
                            <div className="simple-text-block">
                                <h3>Make a Difference with Your Online Resume!</h3>
                                <span>Your resume in minutes with Jobry resume assistant is ready!</span>
                                <a href="#" title="">Create an Account</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>

    )
}

export default CalltoAction