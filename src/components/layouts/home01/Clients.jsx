import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Clients extends Component {
    render() {

        const clientLogos = [];
        const clientURL = [
            "http://www.somtumder.com/",
            "https://www.wongnai.com/restaurants/281722Sl-makkasan-coffee-shop-bangkok-palace-hotel",
            "https://www.facebook.com/maadae.slowfish",
            "https://www.cuisinedegarden.com/",
            "https://www.wongnai.com/reviews/a4631b07722c4b35aff5b46201b50531",
            "https://www.marieguimarbkk.com/home",
            "https://www.instagram.com/the_food_trust/?hl=en"


        ];


        for (let i = 1; i <= 50; i++) {
        const logoNumber = i < 10 ? `0${i}` : `${i}`;
        const logoPath = `assets/images/clients/logo shop-${logoNumber}.png`;
        clientLogos.push(logoPath);
        }

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
                    <div className="row justify-content-center">
                        <div className="col-lg-8">

                        <div className="row justify-content-center pb-5">
                        {clientLogos.map((logo, index) => (
                            <div key={index} className="col-lg-2 col-sm-6">
                            <Link to={clientURL[index]} target='_blank' >
                            <div className="client-logo mt-3">
                                <img src={logo} alt={`Logo ${index + 1}`} className="img-fluid" width={"150px"} height={"150px"} />
                            </div>
                            </Link>
                            </div>
                        ))}
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
