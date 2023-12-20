import React, { Component } from 'react';
// import {Link} from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
                                    
            <section className="section-padding contact bg-white" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">Contact with Author</h3>
                                <p>This book is concerned with creating typography and is essential for professionals who regularly work for clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-sm-12 col-md-12">
                            <form className="contact__form form-row contact-form " method="post" action="mail.php" id="contactForm" >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="alert alert-success contact__msg" style={{display:'none'}} role="alert">
                                            Your message was sent successfully.
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" id="name" name="name" className="form-control" placeholder="Enter Your Name"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="email" id="email" className="form-control" placeholder="Enter Your Email Address"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea id="message" name="message" cols="30" rows="6" className="form-control" placeholder="Your Message"></textarea>    
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="d-lg-flex justify-content-between mt-4">
                                            <p>* Rest assured. We will not spam at your inbox.</p>
                                            <input id="submit" name="submit" type="submit" className="btn btn-main-2" value="Send Message"/>
                                        </div>
                                    </div>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
