import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
                                    
            <section className="section-padding contact bg-white" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">ติดต่อเรา</h3>
                                <p>สนใจติดต่อเปิดร้านกับ AAppoint และสอบถามข้อมูลเพิ่มเติม</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.558141068117!2d100.544423!3d13.7451805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29edb2d4fe647%3A0x8e3f5e2586334016!2sAlma%20Link%20Building!5e0!3m2!1sen!2sus!4v1703282941788!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <div className="footer-widget footer-contact mb-5 mb-lg-0 pt-3">
                                        <ul className="list-unstyled">
                                        <li><h6> ที่อยู่: เลขที่ 25 อาคารอัลม่า ลิงค์ ชั้น 17 ห้อง 222 ซอยชิดลม </h6></li>
                                        <li><h6> ถนนเพลินจิต แขวงลุมพินี เขตปทุมวัน กรุงเทพ 10330</h6></li> 
                                        <li>เบอร์โทร : 064-425-5865</li>
                                        <li>อีเมลล์ : customerservice@aappoint.me</li>
                                        </ul>
                            </div>

                            
                            
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
                                            <h4>เลือกหัวข้อ <span className='contact-title'>(เลือกอย่างน้อย 1 หัวข้อ)</span></h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='form-group row'>
                                            <div className='col-4'><h6 className='contact-select-btn'>สอบถามรายละเอียด</h6></div>
                                            <div className='col-4'><h6 className='contact-select-btn'>สมัครใช้บริการ</h6></div>
                                            <div className='col-4'><h6 className='contact-select-btn'>ต้องการยกเลิก</h6></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" id="name" name="name" className="form-control" placeholder="ชื่อ-นามสกุล"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="ประเภทธุรกิจ/ ชื่อสถานประกอบการ"/>
                                        </div>
                                    </div>
                                    

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea id="message" name="message" cols="30" rows="6" className="form-control" placeholder="ข้อมูลเพิ่มเติม, ระบุแพ็กเกจ"></textarea>    
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="d-lg-flex justify-content-end mt-4">
                                            <input id="submit" name="submit" type="submit" className="btn contact-btn" value="Send Message"/>
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
