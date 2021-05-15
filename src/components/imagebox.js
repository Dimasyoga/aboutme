import React, { Component } from 'react';
import Tilt from 'react-tilt';
import { GatsbyImage } from "gatsby-plugin-image"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class LightboxExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
        photoIndex: 0,
        isOpen: false,
        };
    }
    
    render() {
        const { photoIndex, isOpen } = this.state;
        const images = this.props.imageData;

        if (this.props.isDesktop){
            return (
                <div className="imageBox">
                    {this.props.imageData.map((image, index)=>{
                        return(
                            <div key={index} className="project-wrapper__image">
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
                                            image={image}
                                            alt={this.props.title}
                                        />
                                    </div>
                                </Tilt>
                            </div>
                        );
                    })}
                </div>
            );
        }else{
            return (
                <div>
                    <button className="cta-btn cta-btn--hero" type="button" onClick={() => this.setState({ isOpen: true })}>
                        Open Lightbox
                    </button>
        
                    {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex].images.fallback.src}
                        nextSrc={images[(photoIndex + 1) % images.length].images.fallback.src}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length].images.fallback.src}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                        }
                    />
                    )}
                </div>
            );
        }
    }
}