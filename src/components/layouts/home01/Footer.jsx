import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (          
            <section className="footer">
                

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="header-right-info text-center">
                                <ul className="header-socials">
                                    <li><Link to="#"><i className="fab fa-facebook-f" aria-hidden="true" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-twitter" aria-hidden="true" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-linkedin" aria-hidden="true" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-pinterest" aria-hidden="true" /></Link></li>
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
