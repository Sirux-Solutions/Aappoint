import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isHovered: false,
        };
      }
    
      handleMouseEnter = () => {
        this.setState({ isHovered: true });
      };
    
      handleMouseLeave = () => {
        this.setState({ isHovered: false });
      };

    
    render(
        
    ) {

        return (          

            <section className="footer">
                

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="header-right-info text-center">
                                <ul className="header-socials">
                                    <li><Link to="https://www.facebook.com/AAppoint.me"><i className="fab fa-facebook-f" aria-hidden="true" /></Link></li>
                                    <li><Link to="https://instagram.com/aappoint_official?igshid=MzRlODBiNWFlZA=="><i className="fab fa-instagram" aria-hidden="true" /></Link></li>
                                    <li><div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                                    <Link id='a-tiktok' to="https://www.tiktok.com/@aappoint?_t=8gdFN1ZN7Du&_r=1">
                                    <img src={this.state.isHovered ? 'assets/images/icons/tiktok_white.png' : 'assets/images/icons/tiktok.png'} alt="Tiktok" /></Link>
                                    </div>
                                    </li>
                                    <li><Link to="https://youtube.com/@aappointofficial5463?si=DwJ41FBKFWp4uNjx"><i className="fab fa-youtube" aria-hidden="true" /></Link></li>
                                </ul>
                            </div>
                            
                                <div className="copyright text-center">
                                    <p>@ 2024-Copyright reserved to AAppoint. Proudly Crafted by <Link to="https://www.siruxsolutions.com/">SIRUX</Link> </p>
                                </div>
                            </div>
                        </div>
                    </div>
            
                <div className="fixed-btm-top">
                    <a href="#top-header" className="js-scroll-trigger scroll-to-top"><i className="fa fa-angle-up"></i></a>
                </div>
            </section>


        );
    }
}

export default Footer;
