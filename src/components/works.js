import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { worksData } from '../data/portfolio'
import { StaticQuery, graphql } from "gatsby"
import ImageBox from "../components/imagebox"

const Works = () => {

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
    <StaticQuery
      query={graphql`
        query ImageQuery {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, height: 300, width: 300, formats: PNG)
                }
              }
            }
          }
        }
      `}
      render={data => (
        <section id="projects">
          <Container>
            <div className="project-wrapper">
            <Fade bottom duration={1000} delay={300} distance="0px">
                <h2 className="section-title">Works Experience</h2>
            </Fade>
              {worksData.map((project, index) => {
                const { company, title, info, url, img } = project;
                var imageData = []
                img.forEach((item)=>{imageData.push(data.images.edges.find((n) => n.node.relativePath.includes(item)).node.childImageSharp.gatsbyImageData)})
                var attr = {}
                if (url){
                  attr = {
                              href: url,
                              rel: "noopener noreferrer",
                              target: "_blank",
                            }
                }

                return (
                  <Row key={index}>
                    <Col lg={4} sm={12}>
                      <Fade
                        left={isDesktop}
                        bottom={isMobile}
                        duration={1000}
                        delay={500}
                        distance="30px"
                      >
                        <div className="project-wrapper__text">
                          <a
                            {...attr}
                          >
                            <h3 className="project-wrapper__text-title">{company || 'Company'}</h3>  
                          </a>
                          <h4 className="project-wrapper__text-title2">{title || 'Title'}</h4>
                          <div>
                            <p>
                              {info ||
                                'Info'}
                            </p>
                          </div>
                        </div>
                      </Fade>
                    </Col>
                    <Col lg={4} sm={12}>
                      <Fade
                        right={isDesktop}
                        bottom={isMobile}
                        duration={1000}
                        delay={700}
                        distance="30px"
                      >
                        <ImageBox isDesktop={isDesktop} imageData={imageData} title={title}/>
                      </Fade>
                    </Col>
                  </Row>
                );
              })}
            </div>
          </Container>
        </section>
      )}
    />
  );
};

export default Works;