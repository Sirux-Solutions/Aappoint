import React, { Component } from 'react';
import Slider from "react-slick";
import ReactPlayer from 'react-player/youtube';

class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    img: './assets/images/clients/test-1.jpg',
                    alt: 'images',
                    quoteText: '"หมอเลือกใช้ AAppoint ในการจัดการตาราง คนไข้ทั้ง 5 สาขา หมอและพนักงานเค้าน์เตอร์ทำงานง่ายขึ้นมากเลยค่ะ"',
                    text: '',
                    name: 'ทพญ.กนกรัสม์ ฉันทแดนสุวรรณ',
                    desigantion: 'เจ้าของคลินิกทันตกรรม',
                    video: "https://streamable.com/e/e1i3xv?nocontrols=1",
                },
                {
                    id:2,
                    img: './assets/images/clients/test-2.jpg',
                    alt: 'images',
                    quoteText: '“ผมใช้ AAppoint ในการช่วยจัดการนัดหมายเรื่องต่อดอกเบี้ย ลูกค้ามาต่อดอกตรงเวลามากขึ้น ไม่ต้องโทรตามบ่อยครั้งเหมือนเมื่อก่อนแล้ว”',
                    text: '',
                    name: 'พัชรดนัย เชิงวิวัฒน์กิจ',
                    desigantion: 'กรรมการผู้จัดการห้างทองเพชรี',
                    video: "https://streamable.com/e/z8ltdz?nocontrols=1",

                },
                {
                    id: 3,
                    img: './assets/images/clients/test-3.jpg',
                    alt: 'images',
                    quoteText: '“เข้าร่วม Reserve with Goolge ของ AAppoint 80% ที่เข้ามาจองเป็นลูกค้าใหม่ ซึ่งเป็นชาวต่างชาติ”',
                    text: '',
                    name: 'K.Mike',
                    desigantion: 'ผู้จัดการทั่วไปร้านอาหาร',
                    video: "https://streamable.com/e/v684c8?nocontrols=1",

                },
                
            ]
        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            centerMode: true,
            arrows: false,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '40px',
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
        <section className="testimonial section-padding bg-grey " id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-heading center-heading text-center mb-60">
                            <h3 className="heading-title">รีวิวประสบการณ์ใช้งาน AAppoint จากผู้ใช้งานจริง</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
            <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="testimonials-slides">
                        <Slider {...settings} >
                            {
                                this.state.testimonial.map((data) => (
                                    <div className="review-item" key={data.id}>

                                    <div className="client-desc d-flex align-items-center">
                                            <div className="client-img">
                                                <img src={data.img} alt={data.alt} className="img-fluid"/>
                                            </div>
                                            <div className="client-text">
                                                <h5>{data.name}</h5>
                                                <span className="designation">{data.desigantion}</span>
                                            </div>
                                        </div>

                                        
                                        <div className="video-container" ><iframe allow="fullscreen" allowfullscreen height="100%" src={data.video} width="100%"></iframe></div>

                                            <div className="client-info text-center">
                                            {/* <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div> */}
                                            <h4>{data.quoteText}</h4>
                                            <p>{data.text}</p>
                                            
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
