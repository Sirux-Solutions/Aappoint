import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import menus from '../menus';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavbarOpen: false, // Add state for navbar toggle
            scrolled: false // Add state for navbar scrolling
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const scrollTop = window.pageYOffset;

        // Change navbar styles when scrolling
        if (scrollTop > 50) {
            this.setState({ scrolled: true });
        } else {
            this.setState({ scrolled: false });
        }
    }

    toggleNavbar() {
        this.setState(prevState => ({
            isNavbarOpen: !prevState.isNavbarOpen
        }));
    }

    render() {
        const { scrolled, isNavbarOpen } = this.state;

        // Define classes for navbar based on scroll state
        const navbarClasses = scrolled ? 'navbar navbar-expand-lg scrolled' : 'navbar navbar-expand-lg';

        // Define styles for navbar based on scroll state
        const navbarStyles = scrolled ? { backgroundColor: '#f3f5f5'} : { backgroundColor: 'transparent' };

        const navbarContainerClasses = isNavbarOpen ? 'navbar-container open' : 'navbar-container';

        return (
            <>
            <section className="banner" id="home">
            <header>
                        <div className="site-navigation" id="mainmenu-area">
                            <Navbar  expand="lg" className={navbarClasses} style={navbarStyles}>
                                <Container>
                                    <Navbar.Brand href="#">
                                    <Nav.Link href="#home" className="navbar-brand">
                                            <img src={scrolled ? "assets/images/logo-dark.png" : "assets/images/logo-light.png"} alt="aappoint_logo" className="img-fluid logo" />
                                    </Nav.Link>
                                    </Navbar.Brand>
                                    <Navbar.Toggle onClick={this.toggleNavbar} style={{padding:"0px"}} aria-controls="basic-navbar-nav" className="ms-auto" >
                                    <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                                        <span className="fa fa-bars"></span>
                                    </button>                                    
                                    </Navbar.Toggle>
                                    <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-between mt-4 collapse navbar-collapse  ${isNavbarOpen ? 'show' : ''}`}>
                                    <Nav className="me-auto">
                                    <ul className="navbar-nav d-flex flex-fill ">
                                            
                                            {menus.map((menu) => (
                                                <li className="nav-item flex-fill mt-2" key={menu.id}>
                                                <Nav.Link href={menu.tomenu} className={scrolled ? "nav-link-scrolled js-scroll-trigger" : "nav-link js-scroll-trigger"}>
                                                        {menu.namemenu}
                                                </Nav.Link>
                                                </li>
                                            ))}
                                            <li className='nav-item mx-3 mb-3'>
                                                <HashLink
                                                    to={"https://marketplace.aappoint.me"}
                                                    id={scrolled ? "external-auth-link-button" : "external-auth-link-button"}
                                                    className={scrolled ? "auth-link-button nav-link-scrolled js-scroll-trigger " : "auth-link-button nav-link js-scroll-trigger"}
                                                >
                                                    จองร้านค้า
                                                </HashLink>
                                                
                                            </li>

                                            <li className='nav-item mx-3 mb-3'>
                                                <HashLink
                                                    to={"https://shop.aappoint.me/login"}
                                                    id={scrolled ? "auth-link-button" : "auth-link-button"}
                                                    className={scrolled ? "auth-link-button nav-link-scrolled js-scroll-trigger " : "auth-link-button nav-link js-scroll-trigger"}
                                                >
                                                    เข้าสู่ระบบ
                                                </HashLink>
                                                
                                            </li>
                                            

                                            
                                        </ul>
                                        
                                    </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                    </header>
                <div className="container pt-5 pb-5">
                    <div className="row align-items-center justify-content-between">
                        <div className='col-lg-1 col-sm-1 col-2'>
                            
                            <div className='float-end'>
                                <img src='assets/images/banner/line.png'/>
                            </div>

                        </div>
                        <div className="col-10 col-sm-10 col-lg-5">
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
                            <div className='col-8 text-center'>

                                <h1 className='pt-2'><span style={{color:"#FF5590"}}>AAppoint</span> <span style={{color:"#005F72"}}>แพลตฟอร์มอันดับ 1 ของคนไทย</span></h1>
                                <p className='pt-5' style={{fontSize:"2em"}}>ที่ทำงานได้มาตรฐานกับแพลตฟอร์มระดับโลกอย่าง <span><img width="100px" src="assets/images/banner/Google_logo.png"/></span> </p>
                                <p style={{fontSize:"2em"}}>พร้อมให้บริการจองโต๊ะ</p>
                                <h1 style={{color:"#00CBB9"}}>บน Google Search & Maps แล้ววันนี้</h1> <br />
                                <h2 className='pt-5'>ชมตัวอย่างการใช้งาน</h2>
                                <div className='pt-3'>
                                <img width="200px" src="assets/images/banner/AAppoint_logo.png"/> x <img width="300px" src="assets/images/banner/Reserve_with_google.png"/>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-sm-12 col-md-6 text-center">                                
                                    <iframe className='pt-3 ml-4' width="100%" height="400" src="https://www.youtube.com/embed/W0l5Lb7kfi4?si=a3Di5sXl1SDImv5n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                
                                </div>
                                </div>
                                <h4 className='pt-3'>สะดวก <span className='px-3'>รวดเร็ว</span> มอบความประทับใจให้ลูกค้า</h4>

                            </div>
                            
                        </div>
                    </div>
            </section>
            </>
        );
    }
}

export default Banner;
