import React, { Component } from 'react';

import {Header, Banner, Clients,  Reserve, Features, Services, News, Review, Pricing, Faq,Contact,Footer} from '../layouts/home01/index';

class Home01 extends Component {
    render() {
        return (
            <div className="counter-scroll bg-home1 has-one-page">       
                <Header />       
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