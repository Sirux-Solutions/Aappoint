import React, { Component } from 'react';
import Slider from "react-slick";

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    img: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/387774474_806028594861314_5917871680563120803_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=6sSMfiPxEncAX9vy0D-&_nc_oc=AQkbndVpHyqUdPW044ceWgc56BZ0CFVby9BgHnb-c4Cep2EYgT9qqLFe8kEkIV7xTgU&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDMjRqxj0clrnff6my4H-tEeubAjlRB_GUi_5AsCHB0BQ&oe=65E8019A',
                    alt: 'images',
                    quoteText: 'HOW TO ตั้งชื่อร้านบนโซเชี่ยล ให้ลูกค้าค้นหาร้านของคุณได้ง่ายขึ้น',
                    link: 'https://www.facebook.com/photo/?fbid=806033548194152&set=a.710770531053788',
                },
                {
                    id:2,
                    img: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/375259241_783075003823340_5634818420111174671_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=id8-CXrxGDAAX9uShQq&_nc_ht=scontent-sjc3-1.xx&oh=00_AfAHlEOG3GvgYw7SxcU8fkJ_cO1bEKXD6GEHYjERraGeQg&oe=65E71D87',
                    alt: 'images',
                    quoteText: 'กลยุทธ์ใหม่! เทคนิคทำ SEO ร้านอาหาร เพิ่มโอกาสติดอันดับมากขึ้น',
                    link: 'https://www.facebook.com/100063625417949/posts/pfbid03jA5KMef9mztFD6ozQTffmPp6Y25VVh7brNuphr8HQq73jBWSpLhsNXiYsBCFS3Ml/'
                },
                {
                    id: 3,
                    img: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/365304106_761329282664579_1478202819239032327_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=g2vN7ImqyIQAX-eAWA8&_nc_ht=scontent-sjc3-1.xx&oh=00_AfDpqDUPX3x8lZRj6eUnu-a3gl6DeAukp58fLQNBn5NrHg&oe=65E89C9D',
                    alt: 'images',
                    quoteText: '5 เทคนิค ยกเลิดนัดหมาย แต่ยังรักษาความสัมพันธ์',
                    link: 'https://www.facebook.com/100063625417949/posts/pfbid0245FXifG8P4dRxoexKydiL8hAv1KjqS8Y2LgFQBcVzAt7S7VHdDYiHBBURyjLEg1ql/'
                },
                {
                    id:4,
                    img: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/387741050_806026901528150_4721522551820970835_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=IhoJGKwSPpUAX9twP1g&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCF2azpOUmST8ee_5KdyolCT0tf2AatM0CjM175cP_krQ&oe=65E742BB',
                    alt: 'images',
                    quoteText: 'รีวิวเขียวไข่กา | ร้านอาหารไทยระดับมิชลินไกด์ 6 ปีซ้อน',
                    link: 'https://www.facebook.com/100063625417949/posts/pfbid0yr5FtSEzMPDAU9bV6TP7SmT4c42bURDiVE1DZnAg5GgNnt4D2emY6bAcG5VK4qMzl/'

                },
                {
                    id:5,
                    img: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/378326519_787926216671552_3430288828926619267_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=Fvv3wxjZCHMAX_F11Vp&_nc_ht=scontent-sjc3-1.xx&oh=00_AfCwEECljSj0bB_QBWyjnPdm1bo7m0wNVl7hiCXEzRKKCA&oe=65E74F6C',
                    alt: 'images',
                    quoteText: 'รีวิวส้มตำเด้อ | ร้านอาหารอีสานในต่างแดน มิชลินไกด์ 5 ปี',
                    link: 'https://www.facebook.com/100063625417949/posts/pfbid02Xv99FWXYBW3yeJc6y5cdFCkUzCwqTTTkuycTUhUxj9TX6BVLtRsuWgBd7UdA4qjil/'

                },
            ]
        }
    }

    render() {
        
        return (
            <section className="testimonial section-padding bg-grey pb-0" id="news">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="colxl-6 col-lg-8">
                        <div className="section-heading center-heading text-center mb-60">
                            <h3 className="heading-title">ข่าวสารและกิจกรรม</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center">
                                {this.state.testimonial.map((data) => (
                                    <div className="col-lg-4 mb-5">
                                    <a href={data.link} target='_blank'>
                                        <div className="card-item" key={data.id}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h4>{data.quoteText}</h4>
                                                    <img src={data.img} alt={data.alt} className="img-fluid pt-3" />
                                                </div>                                            
                                            </div>
                                        </div>
                                    </a>
                                    </div>

                                ))}
                        </div>
                </div>
        </section>
        );
    }
}

export default News;
