import React, { Component } from 'react';
import Slider from "react-slick";

class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    img: './assets/images/clients/test-1.jpg',
                    alt: 'images',
                    quoteText: 'Very Effective!',
                    text: 'They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'John Doe',
                    desigantion: 'Developer'
                },
                {
                    id:2,
                    img: './assets/images/clients/test-2.jpg',
                    alt: 'images',
                    quoteText: 'Very Effective!',
                    text: 'They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'John Doe2',
                    desigantion: 'Developer'
                },
                {
                    id: 3,
                    img: './assets/images/clients/test-3.jpg',
                    alt: 'images',
                    quoteText: 'Very Effective!',
                    text: 'They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'John Doe3',
                    desigantion: 'Developer'
                },
                {
                    id:4,
                    img: './assets/images/clients/test-2.jpg',
                    alt: 'images',
                    quoteText: 'Very Effective!',
                    text: 'They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'John Doe2',
                    desigantion: 'Developer',

                },
            ]
        }
    }

    render() {
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            centerMode: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
          };
        return (
        <section className="testimonial section-padding bg-grey pb-0" id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="colxl-6 col-lg-8">
                        <div className="section-heading center-heading text-center mb-60">
                            <h3 className="heading-title">Reviews from happy readers</h3>
                            <p>This book is concerned with creating typography and is essential for professionals who regularly work for clients.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="testimonials-slides">
                            <Slider useRef="reviews" {...settings}>
                            {
                                this.state.testimonial.map((data) => (
                                    <div className="review-item" key={data.id}>
                                        <div className="client-info">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <h4>{data.quoteText}</h4>
                                            <p>{data.text}</p>
                                        </div>

                                        <div className="client-desc d-flex align-items-center">
                                            <div className="client-img">
                                                <img src={data.img} alt={data.alt} className="img-fluid"/>
                                            </div>
                                            <div className="client-text">
                                                <h5>{data.name}</h5>
                                                <span className="designation">{data.desigantion}</span>
                                            </div>
                                        </div>
                                    </div> 
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
}

export default Review;
