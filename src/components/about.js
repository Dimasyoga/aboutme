import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image"

const About = () => {

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
        } else {
        setIsMobile(true);
        setIsDesktop(false);
        }
    }, []);

    return (
        <section id="about">
            <Container>
                <Fade bottom duration={1000} delay={300} distance="0px">
                    <h2 className="section-title">About Me</h2>
                </Fade>
                <Row className="about-wrapper">
                    <Col md={6} sm={12}>
                        <Fade bottom duration={1000} delay={600} distance="30px">
                        <div className="about-wrapper__image">
                            <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />
                        </div>
                        </Fade>
                    </Col>
                    <Col md={6} sm={12}>
                        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                        <div className="about-wrapper__info">
                            <p className="about-wrapper__info-text">
                                Lorem ipsum et dolor Lorem ipsum et dolor Lorem ipsum et dolor Lorem ipsum et dolor Lorem ipsum et dolor
                            </p>
                        </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;