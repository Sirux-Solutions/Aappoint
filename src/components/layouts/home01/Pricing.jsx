import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Pricing extends Component {
    constructor(props){
        super(props);
        this.state = {
            pricing: [
                {
                    id: 1,
                    title: 'Beginner',
                    price: '6,900/year',
                    subtitle: '',
                    currency: '',
                    text: '',
                    icon: 'fa fa-window-minimize',
                    list1: 'ปุ่ม Reserve a table',
                    list2: '1 สาขา',
                    list3: '1 แอดมิน',
                    list4: 'Free Booking',
                    list5: 'รับแจ้งเตือนผ่านอีเมลล์',
                    
                },
                {
                    id: 2,
                    title: 'Beginner',
                    price: '6,900/year',
                    subtitle: '',
                    currency: '',
                    text: '',
                    icon: 'fa fa-window-minimize',
                    list1: 'ปุ่ม Reserve a table',
                    list2: '1 สาขา',
                    list3: '1 แอดมิน',
                    list4: 'Free Booking',
                    list5: 'รับแจ้งเตือนผ่านอีเมลล์',
                    
                },
                {
                    id: 3,
                    title: 'Beginner',
                    price: '6,900/year',
                    subtitle: '',
                    currency: '',
                    text: '',
                    icon: 'fa fa-window-minimize',
                    list1: 'ปุ่ม Reserve a table',
                    list2: '1 สาขา',
                    list3: '1 แอดมิน',
                    list4: 'Free Booking',
                    list5: 'รับแจ้งเตือนผ่านอีเมลล์',
                    
                },
            ]
        }
    }

    render() {
        return (
            <section className="pricing section-padding bg-grey" id="pricing">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">ราคาและแพ๊คเกจ</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        {
                            this.state.pricing.map((data,index) => (
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item mb-4 mb-lg-0" key={data.id}>
                                        <div className="pricing-header">
                                            <span>{data.title}</span>
                                        </div>
                                        <div className="price">
                                            <h3>{data.currency}{data.price}</h3>
                                            <p>{data.subtitle}</p>
                                        </div>
                                        <p>{data.text}</p>


                                        <ul className="pricing-features">
                                            <li><i className={data.icon}></i> {data.list1}</li>
                                            <li><i className={data.icon}></i> {data.list2}</li>
                                            <li><i className={data.icon}></i> {data.list3}</li>
                                            <li><i className={data.icon}></i> {data.list4}</li>
                                            <li><i className={data.icon}></i> {data.list5}</li>

                                        </ul>

                                        <div className="pricing-footer">
                                            <Link to="#" className="btn btn-main-2">สมัครสมาชิก</Link>
                                        </div>
                                    </div>
                                </div>
                            
                            ))
                        }
                       
                    </div>
                </div>
            </section> 
        );
    }
}

export default Pricing;
