import React, { Component } from 'react';
// import {Link} from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
                                    
            <section className="section-padding contact bg-white" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">CONTACT US</h3>
                                <p>สนใจติดต่อเปิดร้านกับ AAppoint และสอบถามข้อมูลเพิ่มเติม</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d201975.69119005266!2d-122.60840080599849!3d37.722725081335845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d37.693481899999995!2d-122.45804629999999!4m5!1s0x808f7e14913c22b1%3A0xba607b2f11d00f18!2sgoogle%20map%20saru%20sushi%20sf!3m2!1d37.7517086!2d-122.4288385!5e0!3m2!1sen!2sus!4v1703280515262!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    
                        <div className="col-lg-6">
                            <form className="contact__form form-row contact-form " method="post" action="mail.php" id="contactForm" >
                                {/* <div className="row">
                                    <div className="col-12">
                                        <div className="alert alert-success contact__msg" style={{display:'none'}} role="alert">
                                            Your message was sent successfully.
                                        </div>
                                    </div>
                                </div> */}
                            
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
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <textarea id="message" name="message" cols="30" rows="6" className="form-control" placeholder="Your Message"></textarea>    
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6">
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
