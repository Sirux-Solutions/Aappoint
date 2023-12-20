import React, { Component } from 'react';

import {Header, Banner, Intro, Chapter, About, Features, Feature2, Counter,
    Cta,  Author, Review, Pricing, Faq,Contact,Footer} from '../layouts/home01/index';

class Home01 extends Component {
    render() {
        return (
            <div className="counter-scroll bg-home1 has-one-page">       
                <Header />       
                        <Banner />
                        <Intro />
                        <About />
                        <Chapter />
                        <Features />
                        <Feature2 />
                        <Counter />
                        <Cta />
                        <Review />
                        <Author />
                        <Pricing />
                        <Faq />
                        <Contact />
                <Footer />
            </div>
        );
    }
}

export default Home01;