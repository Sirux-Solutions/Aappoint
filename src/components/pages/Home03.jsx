import React, { Component } from 'react';
import {Header, Banner, Intro, Chapter, About, Features, Feature2, Counter,
    Cta, Review, Author, Pricing, Faq,Contact,Footer} from '../layouts/home03/index';

class Home01 extends Component {
    render() {
        return (
            <div className="dark-theme">       
                <Header />       
                        <Banner />
                        <Intro />
                        <About />
                        <Features />
                        <Feature2 />
                        <Counter />
                        <Cta />
                        <Chapter />
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