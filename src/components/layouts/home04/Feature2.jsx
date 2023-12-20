import React, { Component } from 'react';

class Feature2 extends Component {
    constructor(props){
        super(props);
        this.state = {
           feature: [
                {
                    id: 1,
                    icon: 'bi bi-badge2',
                    title: 'Entrepreneurs',
                    text: 'Behind the word mountains, far from the countries'
                },
                {
                    id: 2,
                    icon: 'bi bi-article',
                    title: 'Project Managers',
                    text: 'Behind the word mountains, far from the countries'
                },
                {
                    id: 3,
                    icon: 'bi bi-headset',
                    title: 'Students',
                    text: 'Behind the word mountains, far from the countries'
                }
            ]
        }
    }

    render() {
        return (
            <section className="feature-2 pt-100 dark-bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">Who This Book Is For</h3>
                                <p>This book is concerned with creating typography and is essential for professionals who regularly work for clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        {
                            this.state.feature.map((data,i) => (
                                <div className="col-lg-4 col-md-6">
                                    <div className="feature-style-2 mb-4 mb-lg-0" key={i}>
                                        <i className={data.icon}></i>
                                        <div className="feature-text">
                                            <h4>{data.title}</h4>
                                            <p>{data.text}</p>
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

export default Feature2;
