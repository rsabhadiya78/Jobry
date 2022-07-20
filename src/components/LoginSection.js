import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button,Container,Row,Col } from 'react-bootstrap'
import { BiKey, BiUser } from 'react-icons/bi'

const LoginSection = () => {
    return (
        <section>
            <div className="block remove-bottom">
                <Container fluid>
                    <Row>
                        <Col lg="12">
                            <div className="account-popup-area signin-popup-box static">
                                <div className="account-popup">
                                    <span>Lorem ipsum dolor sit amet consectetur adipiscing elit odio duis risus at lobortis ullamcorper</span>
                                    <Form>
                                        <Form.Group className="mb-3 cfield" controlId="LoginEmail">
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <BiUser />
                                        </Form.Group>
                                        <Form.Group className="mb-3 cfield" controlId="LoginPassword">
                                            <Form.Control type="password" placeholder="********" />
                                            <BiKey />
                                        </Form.Group>
                                        <Form.Group className="remember-label" controlId="RememberCheckBox">
                                            <Form.Check className='p-0' type="checkbox" label="Remember me" />
                                        </Form.Group>
                                        <a href="#" title="">Forgot Password?</a>
                                        <Button type="submit" className='border-0'>Login</Button>
                                    </Form >
                                    <div className="extra-login">
                                        <span>Don't Have an Account? </span>
                                        <div className='signupbtnblock'>
                                            <Link to="/signup" className='sitebtn w-100 mt-3 btn-solid'>Signup Now!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default LoginSection