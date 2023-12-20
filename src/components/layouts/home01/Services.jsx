import React, { Component } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

class Services extends Component {
    constructor(props){
        super(props);
        this.state = {
           features: [
                {
                    id: 1,
                    icon: 'bi bi-laptop',
                    title: 'ระบบคิวจัดการผ่านออนไลน์',
                    text: ''
                },
                {
                    id: 2,
                    icon: 'bi bi-geo-alt',
                    title: 'เพิ่มปุ่ม “จองโต๊ะ” บน Google Maps สำหรับธุรกิจร้านอาหาร',
                    text: ''
                },
                {
                    id: 3,
                    icon: 'bi bi-phone',
                    title: 'ลูกค้าจองคิวผ่าน แอพพลิเคชั่น AAppoint',
                    text: ''
                },
                {
                    id: 4,
                    icon: 'bi bi-envelope',
                    title: 'แจ้งเตือนนัดหมาย ผ่าน SMS และ E-mail',
                    text: ''
                },
            ]
        }
    }

    render() {
        return (
            <section className="feature-2 section-padding " id="services">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">บริการของเรา</h3>
                                <p>บริการของเรา ช่วยจัดการตารางานนัดหมายของธุรกิจ เพื่อสร้างความประทับใจให้กับลูกค้าของคุณ</p>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        {
                            this.state.features.map((data,index) => (
                                <div className="col-lg-3 col-md-4">
                                    <div className="feature-style-2 mb-4 mb-lg-0" key={data.id}>
                                        <i className={data.icon}></i>
                                        <div className="feature-text">
                                            <h4>{data.title}</h4>
                                            <p>{data.text}</p>
                                        </div>
                                    </div>
                                </div>
                            
                            ))
                        }
                        
                    </div>
                </div>
            </section> 
        );
    }
}

export default Services;
