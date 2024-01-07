import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     listItem: [
        //         {
        //             id: 1,
        //             icon: 'fa fa-business-time',
        //             title: 'เราช่วยดึงนักท่องเที่ยวมาใช้บริการให้ร้านอาหารของคุณ',
        //         },
        //         {
        //             id: 2,
        //             icon: 'fa fa-check',
        //             title: 'ระบบจองคิว เพื่อธุรกิจ',
        //         },
        //     ]
        // }
    }
    render() {
        return (
            <section className="banner pb-80">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className='col-lg-1'>

                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div className="banner-content">
                                {/* <span className="subheading"></span> */}
                                <h1>เพิ่มปุ่ม จองโต๊ะ</h1>
                                <h1>ผ่าน Google Maps</h1>
                                <p>เราช่วยดึงนักท่องเที่ยวมาใช้บริการให้ร้านอาหารของคุณ</p>
                                {/* <ul>
                                    {
                                    this.state.listItem.map((data,i) => (
                                        <li key={i}><i className={data.icon}></i> {data.title}</li>
                                        ))
                                    }
                                </ul> */}
                                <Link to="#" className="btn btn-main">เปิดใช้งานทันที</Link>  
                            </div>
                        </div>  
                        <div className="col-lg-6">
                            <div className="banner-img">
                                <img src="assets/images/banner/banner.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div> 
                </div> 
            </section>

        );
    }
}

export default Banner;

