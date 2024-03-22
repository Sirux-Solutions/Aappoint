import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Header, Banner, Clients, Reserve, Features, Services, News, Review, Pricing, Faq, Contact, Footer } from '../layouts/home01/index';

class Home01 extends Component {
    render() {
        return (
            <div className="counter-scroll bg-home1 has-one-page">
                <Helmet>
                    {/* Meta tags go here */}
                    <meta name="description" content="Google Maps, ค้นหาใน Google, จองโต๊ะ, จองร้านอาหาร, SEO, ล่วงหน้า, นักท่องเที่ยว, นักท่องเที่ยวต่างชาติ, ร้านอาหารไทย, ธุรกิจร้านอาหาร, กำไร, การตลาดออนไลน์, คู่แข่ง, POS, ลูกค้า, ยอดขาย, ประหยัดต้นทุน, เปิดร้านอาหาร, การจัดการ, ใกล้ฉัน, จองคิว, ระบบร้านอาหาร, ปักหมุด, โพสต์รีวิว, พี่จอง, คัลเลน, คัลแลน, การจอง, นัดหมาย, สำรอง, สำรองที่นั่ง, สำรองโต๊ะ, คิวยาว, ไม่มีคิว" />
                    <meta name="description" content="Google Maps, Google search, Table booking/reservation, Restaurant booking/reservation, SEO, In advance, Tourist, Foreign tourist, Thai Restaurant, Restaurant business, Profit, Online marketing, Competitor, POS, Customer, Sales, Save cost, Open a restuarant, Management, Near me, Make a reservation, Restaurant system, Pin location, Review post, Cullen Hateberry, Appointment, Waiting" />
                </Helmet>

                {/* Uncomment if you have a Header component */}
                {/* <Header /> */}
                <Banner />
                <Services />
                <Reserve />
                <Review />
                <Clients />
                <Features />
                <News />
                <Pricing />
                <Faq />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Home01;
