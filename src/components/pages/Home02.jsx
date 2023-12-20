import React, { Component } from 'react';
import {Header, Banner, Chapter, About, Features, Feature2,
    Cta, Review,Author,Contact,Footer} from '../layouts/home02/index';

class Home02 extends Component {
    render() {
        return (
            <div className="counter-scroll bg-home1 has-one-page">       
                <Header />       
                        <Banner />
                        <Feature2 />
                        <About />
                        <Chapter />
                        <Features />
                        <Review />
                        <Author />
                        <Cta />
                        <Contact />
                <Footer />
            </div>
        );
    }
}

export default Home02;
