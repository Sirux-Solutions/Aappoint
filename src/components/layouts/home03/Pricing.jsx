import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Pricing extends Component {
    constructor(props){
        super(props);
        this.state = {
            pricing: [
                {
                    id: 1,
                    title: 'Free Version',
                    price: '0',
                    subtitle: 'Full Free Chapter',
                    currency: '$',
                    text: 'Get one chapter of pdf version for free busy subscribing',
                    icon: 'fa fa-circle',
                    list1: '1 Free Chapter',
                    list2: 'PDF version',
                    list3: 'Free Subscripion',
                    list4: 'No hardcover',
                    
                },
                {
                    id: 2,
                    title: 'eBook Version',
                    price: '49.99',
                    subtitle: 'One time purchase',
                    currency: '$',
                    text: 'Get one chapter of pdf version for free busy subscribing',

                    icon: 'fa fa-circle',
                    list1: 'Ebook Version',
                    list2: 'Audio Book',
                    list3: 'PDF version',
                    list4: 'Free Subscripion',
                    
                },
                {
                    id: 3,
                    title: 'Full Version',
                    price: '79.99',
                    subtitle: 'One time purchase',
                    currency: '$',
                    text: 'Get one chapter of pdf version for free busy subscribing',

                    icon: 'fa fa-circle',
                    list1: 'Ebook Version2',
                    list2: 'Audio Book',
                    list3: 'PDF version',
                    list4: 'hardcover variation',
                   
                },
            ]
        }
    }

    render() {
        return (
            <section className="pricing section-padding dark-bg" id="pricing">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">Pricing and Plans</h3>
                                <p>This book is concerned with creating typography and is essential for professionals who regularly work for clients.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        {
                            this.state.pricing.map((data,i) => (
                                <div className="col-lg-4 col-md-6">
                                    <div className="pricing-item mb-4 mb-lg-0" key={i}>
                                        <div className="pricing-header">
                                            <span>{data.title}</span>
                                        </div>
                                        <div className="price">
                                            <h3>{data.currency}{data.price}</h3>
                                            <p>{data.subtitle}</p>
                                        </div>
                                        <p>{data.text}</p>


                                        <ul className="pricing-features">
                                            <li><i className={data.icon}></i> {data.list1}</li>
                                            <li><i className={data.icon}></i> {data.list2}</li>
                                            <li><i className={data.icon}></i> {data.list3}</li>
                                            <li><i className={data.icon}></i> {data.list4}</li>
                                        </ul>

                                        <div className="pricing-footer">
                                            <Link to="#" className="btn btn-main-2">Get it now</Link>
                                        </div>
                                    </div>
                                </div>
                            
                            ))
                        }
                       
                    </div>
                </div>
            </section> 
        );
    }
}

export default Pricing;
