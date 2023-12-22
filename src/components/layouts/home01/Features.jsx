import React, { Component } from 'react';
import { FeatureLeft, FeatureRight } from './Features/index';

class Features extends Component {
    render() {
        return (
        <section className="book-preview section-padding"  id="topics">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-heading center-heading text-center mb-60">
                            <h3 className="heading-title text-white">ธุรกิจใดบ้างที่สามารถใช้งาน AAppoint ได้ ?</h3>
                            <p className="text-white">ธุรกิจบริการ ธุรกิจนัดหมาย การจองคิว คุณเหมาะกับเราที่สุด!</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <FeatureLeft />
                    </div>

                    {/* <div className="col-lg-6">
                        <FeatureRight />
                    </div> */}
                </div>
            </div>
        </section> 
        );
    }
}

export default Features;
