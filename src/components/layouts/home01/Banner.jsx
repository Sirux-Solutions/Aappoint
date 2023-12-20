import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            listItem: [
                {
                    id: 1,
                    icon: 'fa fa-business-time',
                    title: 'We make your business better.',
                },
                {
                    id: 2,
                    icon: 'fa fa-check',
                    title: 'ระบบจองคิว เพื่อธุรกิจ',
                },
            ]
        }
    }
    render() {
        return (
            <section className="banner pb-80">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                    <div className="col-lg-5">
                        <div className="banner-img">
                                <img src="assets/images/banner/banner.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="banner-content ">
                                {/* <span className="subheading"></span> */}
                                <h1>AAppoint</h1>
                                <ul>
                                    {
                                    this.state.listItem.map((data,i) => (
                                        <li key={i}><i className={data.icon}></i> {data.title}</li>
                                        ))
                                    }
                                </ul>
                                <Link to="#" className="btn btn-main">เปิดร้านค้ากับ AAppoint</Link>  
                            </div>
                        </div>
                        
                    </div> 
                </div> 
            </section>

        );
    }
}

export default Banner;

