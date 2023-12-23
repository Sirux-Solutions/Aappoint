import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';


class Reserve extends Component {
    constructor(props){
        super(props);
        this.state = {
            about: [
                {
                    id: 1,
                    icon: 'bi bi-phone',
                    title: 'สะดวก',
                    text: 'เพิ่มความสะดวกให้ลูกค้าจองง่ายมากยิ่งขึ้น'
                },
                {
                    id: 2,
                    icon: 'bi bi-clipboard-data',
                    title: 'ได้ข้อมูล',
                    text: 'ทางร้านจะได้ข้อมูลในการจองอย่างครบถ้วน เช่น ชื่อ, เบอร์โทร, วัน-เวลาที่จอง, จำนวนคนที่เข้ามา'
                },
                {
                    id: 3,
                    icon: 'bi bi-envelope',
                    title: 'การแจ้งเตือน',
                    text: 'ลูกค้าจะได้รับการแจ้งเตือนล่วงหน้าผ่าน SMS และ E-mail '
                }
            ]
        }
    }
    render() {
        return (
        <section className="about-section section-padding bg-grey" id="reserve">
            <div className="container">
                <div className="row">
                <div className="col-lg-1 col-md-1">
                </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="about-img">
                            <img src="assets/images/banner/reserve.png" alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1">
                </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="section-heading">
                            {/* <span className="subheading">AAppoint X Reserve with Google</span> */}
                            <h3 className="heading-title">AAppoint X Reserve with Google.</h3>
                            <p>เพิ่มปุ่ม จองโต๊ะ หรือ Reserve a Table บน Google และ Google Maps ดีอย่างไร? </p>
                        </div>

                        {
                            this.state.about.map((data,i) => (
                                <div className="about-text-block" key={i}>
                                    <i className={data.icon}></i>
                                    <h4>{data.title}</h4>
                                    <p>{data.text} </p>
                                </div>
                            ))
                        }
                        
                        <Link to="#" className="btn btn-main-2"><i className="fa fa-check me-2"></i>เรียนรู้เพิ่มเติม</Link> 
                    </div>
                </div>
            </div>
        </section>  
        );
    }
}

export default Reserve;
