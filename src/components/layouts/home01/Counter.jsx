import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: [
                {
                    id: 1,
                    icon: 'ti-desktop',
                    title: '50',
                    suffix: 'k',
                    text: 'People are reading this book and improving'
                },
                {
                    id: 2,
                    icon: 'ti-agenda',
                    title: '97',
                    suffix: '%',
                    text: 'People are reading this book and improving'
                },
                {
                    id: 3,
                    icon: 'ti-heart',
                    title: '4.9',
                    suffix: '',
                    text: 'People are reading this book and improving'
                },
                {
                    id: 4,
                    icon: 'ti-microphone-alt',
                    title: '50',
                    suffix: '+',
                    text: 'People are reading this book and improving'
                }
            ]
        }
    }

    render() {
        return (
            <section className="counter-wrap pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-counter-img">
                                <img src="assets/images/bg/about.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                {
                                this.state.counter.map((data,index) => (
                                    <div className="col-lg-6 col-md-6">
                                        <div className="counter-item" key={data.id}>
                                            <i className={data.icon}></i>
                                            <div className="count">
                                                <span className="counter h2">{data.title}</span><span className="h2">{data.suffix}</span>
                                            </div>
                                            <p>{data.text}</p>
                                        
                                        </div>
                                    </div>
                                    
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        );
    }
}

export default Counter;
