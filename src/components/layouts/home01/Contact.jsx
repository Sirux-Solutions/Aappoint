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
                            
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.558141068117!2d100.544423!3d13.7451805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29edb2d4fe647%3A0x8e3f5e2586334016!2sAlma%20Link%20Building!5e0!3m2!1sen!2sus!4v1703282941788!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <h5>สำนักงานอาคารอัลม่า ลิ้งค์</h5>
                            <h5>เบอร์ : 0644255865</h5>
                            <h5>E-mail : info@aappoint.me</h5>

                            
                            
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
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" id="name" name="name" className="form-control" placeholder="ชื่อ-นามสกุล"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="ประเภทธุรกิจ / ชื่อสถานประกอบการ"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="จังหวัดสถานประกอบการ"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea id="message" name="message" cols="30" rows="6" className="form-control" placeholder="หมายเหตุ"></textarea>    
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
