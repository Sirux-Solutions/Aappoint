import React, { Component } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

class Services extends Component {
    constructor(props){
        super(props);
        this.state = {
           features: [
                {
                    id: 1,
                    icon: 'assets/images/services/icon-01.png',
                    title: 'สมัครใช้งานวันนี้ พร้อมเปิดใช้งานทันที',
                    text: ''
                },
                {
                    id: 2,
                    icon: 'assets/images/services/icon-02.png',
                    title: 'แจ้ง Booking อัตโนมัติ ผ่าน SMS และ E-mail',
                    text: ''
                },
                {
                    id: 3,
                    icon: 'assets/images/services/icon-03.png',
                    title: 'ใช้งานพร้อมกันได้ ไม่จำกัดจำนวนเครื่อง ทุกที่ ทุกเวลา',
                    text: ''
                },
                {
                    id: 4,
                    icon: 'assets/images/services/icon-04.png',
                    title: 'เห็นยอดขายล่วงหน้า',
                    text: ''
                },
                {
                    id: 5,
                    icon: 'assets/images/services/icon-05.png',
                    title: 'รองรับการใช้งานทุกภาษา',
                    text: ''
                },
            ]
        }
    }

    render() {
        return (
            <section className="feature-2 section-padding " id="services">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">ทำไมต้อง AAppoint</h3>
                                <p>บริการของเรา ช่วยจัดการตารางานนัดหมายของธุรกิจ เพื่อสร้างความประทับใจให้กับลูกค้าของคุณ</p>
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-center pt-2 pb-2 '>
                    <div className='col-2'></div>
                    <div className="col-lg-4 col-md-4 text-center">
                        <img height="500px" src='assets/images/services/reserve-01.png'/>
                        <p  className='mt-5 pt-2 service-btn mx-auto' style={{width:"100px", height:"50px"}}>1. กดจอง</p>
                    </div>
                    <div className="col-lg-4 col-md-4 text-center">
                    <img height="500px" src='assets/images/services/reserve-02.png'/>
                    <p  className='mt-5 pt-2 service-btn mx-auto' style={{width:"200px", height:"50px"}}>2. เลือกจำนวนคน วัน-เวลา </p>

                    </div>
                    <div className='col-2'></div>
                    </div>

                    <div className='row justify-content-center pt-5 pb-5'>
                    <div className='col-2'></div>
                    <div className="col-lg-4 col-md-4 text-center">
                        <img height="500px" src='assets/images/services/reserve-03.png'/>
                        <p  className='mt-5 pt-2 service-btn mx-auto' style={{width:"200px", height:"50px"}}>3. คอนเฟิร์ม BOOKING </p>
                    </div>
                    <div className="col-lg-4 col-md-4 text-center">
                    <img height="500px"  src='assets/images/services/reserve-04.png'/>
                    <p  className='mt-5 pt-2 service-btn mx-auto' style={{width:"200px", height:"50px"}}>4. รับแจ้งเตือนการจอง </p>
                    </div>
                    <div className='col-2'></div>
                    </div>


                </div>
                <div className="row justify-content-around">
                        {
                            this.state.features.map((data,index) => (
                                <div className="col-lg-2 col-md-4">
                                    <div className="feature-style-2 mb-4 mb-lg-0" key={data.id}>
                                        <img width="50px" src={data.icon}/>
                                        <div className="feature-text">
                                            <h4>{data.title}</h4>
                                            <p>{data.text}</p>
                                        </div>
                                    </div>
                                </div>
                            
                            ))
                        }
                        
                    </div>
            </section> 
        );
    }
}

export default Services;
