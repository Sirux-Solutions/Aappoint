import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import menus from '../menus';



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
// Todo: Add Changing color functionality
// To fix: Make sure responsive navbar work
            <>
            <section className="banner">
            <header>
                <div className="site-navigation" id="mainmenu-area">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span>
                            </button>

                            <div className=" collapse navbar-collapse justify-content-between" id="navbarMenu">
                                
                                <ul className="navbar-nav d-flex flex-fill">
                                    <li className='logo nav-item mx-3'>
                                    <Link to="#" className="navbar-brand">
                                <img src="assets/images/logo-light.png" alt="aappoint_logo" className="img-fluid logo"/>
                            </Link>
                                    </li>

                                    {
                                        menus.map((menu) => (
                                            <li className="nav-item flex-fill" key={menu.id}><HashLink to={menu.tomenu}  className="nav-link js-scroll-trigger">{menu.namemenu}</HashLink></li>
                                        ))
                                    }  

                                    <li className='nav-item mx-3'>
                                        <HashLink  className="nav-link js-scroll-trigger auth-link-button">เข้าสู่ระบบ</HashLink>
                                    </li>                                    
                                    
                                </ul>
                            </div>

                            <div className="header-right-info d-none d-lg-block">
    {/* <form className="header-search-form">
        <input type="text" placeholder="Search" className="modern-search-input" />
        <button type="submit" className="modern-search-button">
            <i className="fas fa-search" aria-hidden="true" />
        </button>
    </form> */}
</div>

                        </div> 
                    </nav>
                </div>
            </header>
                <div className="container pt-5 pb-5">
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

            <section className="image-section">
                    <img className="img-fluid" src="assets/images/banner/banner2.jpg" />
            </section>
            <section className="image-section">
                    <img className="img-fluid" src="assets/images/banner/banner3.jpg" />
            </section>
            <section className="text-section pt-5">
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-6 text-center'>

                            {/* TODO: Update Styling */}
                                <h3>AAppoint แพลตฟอร์มอันดับ 1 ของคนไทย</h3>
                                <p>ที่ทำงานได้มาตรฐานกับแพลตฟอร์มระดับโลกอย่าง <span><img width="100px" src="assets/images/banner/Google_logo.png"/></span> </p>
                                <p>พร้อมให้บริการจองโต๊ะ</p>
                                <h4>บน Google Search & Maps แล้ววันนี้</h4>
                                <h5>ชมตัวอย่างการใช้งาน</h5>
                                <div>
                                <img width="200px" src="assets/images/banner/AAppoint_logo.png"/> x <img width="300px" src="assets/images/banner/Reserve_with_google.png"/>

                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/W0l5Lb7kfi4?si=a3Di5sXl1SDImv5n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                <p>สะดวก รวดเร็ว มอบความประทับใจให้ลูกค้า</p>

                            </div>
                            <div clasName="col-12">

                            </div>
                        </div>
                    </div>
            </section>
            </>
        );
    }
}

export default Banner;

