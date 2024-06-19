import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageSent: false,
            checked: false,
            radioValue: '1',
            subject: 'สอบถามรายละเอียด',
            fullName: '', // Added state for full name
            business: '', // Added state for business
            message: '',  // Added state for message
            phoneNumber: '', // Added state for phone number
            email: '' // Added state for email
        };
    }

    handleCloseToast = () => {
        this.setState({ messageSent: false });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_m3vnk6l', 'template_xn51i9i', e.target, 'Johl7N3V6cKfuAPI5')
            .then((result) => {
                console.log(result.text);
                this.setState({ messageSent: true });
                toast.success("Your message was sent successfully.");
                // Clear input fields after successful submission
                this.setState({
                    fullName: '',
                    business: '',
                    message: '',
                    phoneNumber: '', // Clear phone number
                    email: '' // Clear email
                });
            }, (error) => {
                console.log(error.text);
                toast.error("Error sending message. Please try again later.");
            });
    };

    handleCheckedChange = (e) => {
        this.setState({ checked: e.currentTarget.checked });
    };
    
    handleRadioChange = (e) => {
        let title = '';
        if (e.currentTarget.value === '1'){
            title = 'สอบถามรายละเอียด';
        }
        else if (e.currentTarget.value === '2'){
            title = 'สมัครใช้บริการ';
        }
        else {
            title = 'ต้องการยกเลิก';
        }
        this.setState({ 
            radioValue: e.currentTarget.value, 
            subject: title 
        });
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { radioValue, subject, fullName, business, message, phoneNumber, email } = this.state;

        const radios = [
            { name: 'สอบถามรายละเอียด', value: '1' },
            { name: 'สมัครใช้บริการ', value: '2' },
            { name: 'ต้องการยกเลิก', value: '3' },
        ];
        
        return (
            <section className="section-padding contact bg-white" id="contact">
                <ToastContainer />
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
                            <form className="contact__form form-row contact-form" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="alert alert-success contact__msg" style={{display:'none'}} role="alert">
                                            Your message was sent successfully.
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <h4>เลือกหัวข้อ <span className='contact-title'>(เลือกอย่างน้อย 1 หัวข้อ)</span></h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='form-group row'>
                                            <div className='col-12 mx-4'>
                                                <ButtonGroup>                            
                                                    {radios.map((radio, idx) => (
                                                        <ToggleButton
                                                            key={idx}
                                                            id={`radio-${idx}`}
                                                            type="radio"
                                                            variant={idx == 2 ? 'outline-danger' : 'outline-success'}
                                                            name="radio"
                                                            value={radio.value}
                                                            checked={radioValue === radio.value}
                                                            onChange={this.handleRadioChange}
                                                        >
                                                            {radio.name}
                                                        </ToggleButton>
                                                    ))}
                                                </ButtonGroup>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                id="fullName" 
                                                name="fullName" 
                                                className="form-control" 
                                                placeholder="ชื่อ-นามสกุล"
                                                value={fullName} 
                                                onChange={this.handleInputChange} // Added onChange handler
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="phoneNumber" 
                                                id="phoneNumber" 
                                                className="form-control" 
                                                placeholder="เบอร์โทรศัพท์"
                                                value={phoneNumber} 
                                                onChange={this.handleInputChange} // Added onChange handler
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input 
                                                type="email" 
                                                name="email" 
                                                id="email" 
                                                className="form-control" 
                                                placeholder="อีเมล"
                                                value={email} 
                                                onChange={this.handleInputChange} // Added onChange handler
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                name="business" 
                                                id="business" 
                                                className="form-control" 
                                                placeholder="ประเภทธุรกิจ/ ชื่อสถานประกอบการ"
                                                value={business} 
                                                onChange={this.handleInputChange} // Added onChange handler
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea 
                                                id="message" 
                                                name="message" 
                                                cols="30" 
                                                rows="6" 
                                                className="form-control" 
                                                placeholder="ข้อมูลเพิ่มเติม, ระบุแพ็กเกจ"
                                                value={message} 
                                                onChange={this.handleInputChange} // Added onChange handler
                                            ></textarea>    
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="d-lg-flex justify-content-end mt-4">
                                            <input id='subject' name='subject' type='text' value={subject} style={{ display: 'none' }} />

                                            <button type="submit" className="btn contact-btn">Send Message</button>
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
