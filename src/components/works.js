import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import { worksData } from '../data/portfolio'
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"

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
                  gatsbyImageData(placeholder: BLURRED, height: 400, width: 400, formats: PNG)
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
              {worksData.map((project) => {
                const { title, info, info2, url, repo, img, id } = project;
                const imageData = data.images.edges.find((n) => n.node.relativePath.includes(img));

                return (
                  <Row key={id}>
                    <Col lg={4} sm={12}>
                      <Fade
                        left={isDesktop}
                        bottom={isMobile}
                        duration={1000}
                        delay={500}
                        distance="30px"
                      >
                        <div className="project-wrapper__text">
                          <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                          <div>
                            <p>
                              {info ||
                                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                            </p>
                            <p className="mb-4">{info2 || ''}</p>
                          </div>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--hero"
                            href={url || '#!'}
                          >
                            See Live
                          </a>

                          {repo && (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cta-btn text-color-main"
                              href={repo}
                            >
                              Source Code
                            </a>
                          )}
                        </div>
                      </Fade>
                    </Col>
                    <Col lg={8} sm={12}>
                      <Fade
                        right={isDesktop}
                        bottom={isMobile}
                        duration={1000}
                        delay={700}
                        distance="30px"
                      >
                        <div className="project-wrapper__image">
                          <a
                            href={url || '#!'}
                            target="_blank"
                            aria-label="Project Link"
                            rel="noopener noreferrer"
                          >
                            <Tilt
                              options={{
                                reverse: false,
                                max: 8,
                                perspective: 1000,
                                scale: 1,
                                speed: 300,
                                transition: true,
                                axis: null,
                                reset: true,
                                easing: 'cubic-bezier(.03,.98,.52,.99)',
                              }}
                            >
                              <div data-tilt className="thumbnail rounded">
                                <GatsbyImage 
                                  image={imageData.node.childImageSharp.gatsbyImageData}
                                  alt={title}
                                />
                              </div>
                            </Tilt>
                          </a>
                        </div>
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