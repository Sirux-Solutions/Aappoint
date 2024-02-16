import React, {Component } from 'react';
import FetchCSVData from './FetchCSVData';


class Clients extends Component {


    render() {

        return (
            <section className="pt-20 center-about bg-grey">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-heading text-center">
                                <h2>ลูกค้าของเรา</h2>

                            </div>
                        </div>
                    </div>
                </div>
                
                <FetchCSVData />

                
            </section>
        );
    }
}

export default Clients;
