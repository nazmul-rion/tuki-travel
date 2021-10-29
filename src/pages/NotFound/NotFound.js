import React from 'react'
import './NotFound.css'
import logo from '../../images/notfound.png'
import { Link } from 'react-router-dom'
import { Col, Container, Image, Row } from 'react-bootstrap'
const NotFound = () => {
    return (
        <Container fluid className="bg-custom">
            <Row className="flex-column-reverse flex-lg-row justify-content-center align-items-center">
                <Col sm={12} md={6} className="px-5 px-lg-0 text-center">
                    <h1 className="sorry text-highlighted fw-bold">Sorry</h1>
                    <h2 className="fw-bold">NOT FOUND</h2>
                    <h4>The page you requested not found.</h4>
                    <Link className="custom-button my-4 fw-bold mx-5" to="/">Back to Home</Link>
                </Col>

                <Col sm={12} md={6} className="p-3">
                    <Image src={logo} fluid />
                </Col>
            </Row>
            <Row>

            </Row>
        </Container >
    )
}

export default NotFound
