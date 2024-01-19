import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Clients extends Component {
    render() {
        return (
            <section className="pt-20 center-about bg-grey">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-heading text-center">
                                <h2>ลูกค้าของเรา</h2>
                                {/* <span>Creative works funnel</span>
                                <Link to="#">Have questions?​ <strong className="text-color">Get Free Guidebook</strong> </Link> */}
                            </div>
                        </div>
                    </div>
                </div>

                <section className="cta-2 clients pb-5">
                    <div className="container-fluid">
                        <div className="row justify-content-center pb-5">
                            <div className="col-lg-3 col-sm-6">
                                <div className="client-logo">
                                    <img src="assets/images/clients/logo1.JPG" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="client-logo">
                                    <img src="assets/images/clients/logo2.JPG" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="client-logo">
                                    <img src="assets/images/clients/logo3.JPG" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="client-logo">
                                    <img src="assets/images/clients/logo4.JPG" alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-around" >
                            <div className="col-lg-3 col-sm-6">
                                <div className="client-logo">
                                    <img src="assets/images/clients/logo5.JPG" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6" >
                                <div className="client-logo">
                                    <img src="assets/images/clients/logo6.JPG" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="client-logo">
                                    <img src="assets/images/clients/logo7.JPG" alt="" className="img-fluid"/>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Clients;
