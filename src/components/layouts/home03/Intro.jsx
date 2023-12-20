import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Intro extends Component {
    render() {
        return (
            <section className="pt-100 center-about dark-bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-heading text-center">
                                <span>Creative works funnel</span>
                                <h2>Explore the most appropriate courses and certificate that you desire will be the sweet ultimate reward. Let’s get started</h2>
                                <Link to="#">Have questions?​ <strong className="text-color">Get Free Guidebook</strong> </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="cta-2 clients ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-6 ">
                                <div className="client-logo">
                                    <img src="assets/images/clients/logo1.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="client-logo">
                                    <img src="assets/images/clients/logo2.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="client-logo">
                                    <img src="assets/images/clients/logo3.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="client-logo">
                                    <img src="assets/images/clients/logo4.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="client-logo">
                                    <img src="assets/images/clients/logo5.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="client-logo">
                                    <img src="assets/images/clients/logo6.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Intro;
