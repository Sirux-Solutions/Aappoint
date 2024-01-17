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

            <>
            <section className="banner">
            <header>
                <div className="site-navigation " id="mainmenu-area">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link to="#" className="navbar-brand">
                                <img src="assets/images/logo-dark.png" alt="aappoint_logo" className="img-fluid logo"/>
                            </Link>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarMenu">
                                
                                <ul className="navbar-nav ms-auto">
                                    

                                    {
                                        menus.map((menu) => (
                                            <li className="nav-item" key={menu.id}><HashLink to={menu.tomenu}  className="nav-link js-scroll-trigger">{menu.namemenu}</HashLink></li>
                                        ))
                                    }  

                                    <li className='nav-item'>
                                        <HashLink  className="nav-link js-scroll-trigger">เข้าสู่ระบบ</HashLink>
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
            </>
        );
    }
}

export default Banner;

