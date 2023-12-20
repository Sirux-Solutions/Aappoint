import React, { Component } from 'react';
import { ContainerLeft, ContainerMid,ContainerRight } from './chapters/index';


class Chapter extends Component {
    render() {
        return (
        <section className="chapter-section section-padding bg-white" id="chapters">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="center-heading mb-60">
                            <h3 className="heading-title">Chapters we've covered</h3>
                            <p>This lovely, well-written book is concerned with creating typography and is essential for professionals who regularly work for clients.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <ContainerLeft />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <ContainerMid />
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <ContainerRight />
                    </div>
                </div>
            </div>
        </section> 
        );
    }
}

export default Chapter;
