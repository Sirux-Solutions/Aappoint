import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (          
            <section className="footer pt-120 dark-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 me-auto col-sm-6 col-md-12">
                            <div className="widget footer-widget mb-5 mb-lg-0">
                                <h5 className="widget-title">BookHunt</h5>
                                <p className="mt-3">Veniam Sequi molestias aut necessitatibus optio magni at natus accusamus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, obcaecat .</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-sm-6 col-md-12">
                            <div className="footer-widget mb-5 mb-lg-0">
                                <h5 className="widget-title">Information</h5>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-6">
                                    <ul className="list-unstyled footer-links">
                                        <li><Link to="#">SEO Business</Link></li>
                                        <li><Link to="#">Digital Marketing</Link></li>
                                        <li><Link to="#">Graphic Design</Link></li>
                                        <li><Link to="#">Site Development</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="footer-widget footer-contact mb-5 mb-lg-0">
                                        <ul className="list-unstyled">
                                            <li> +1 (305) 547-9909</li>
                                            <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
                                            <li>info@example.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-btm">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="copyright">
                                    <p>@ 2023-Copyright reserved to BooHunt.Proudly Crafted by <Link to="https://themeforest.net/user/pxelcode">Pxelcode</Link> </p>
                                </div>
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
