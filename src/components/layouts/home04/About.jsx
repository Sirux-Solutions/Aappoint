import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            about: [
                {
                    id: 1,
                    icon: 'bi bi-badge2',
                    title: '10+ award achieved',
                    text: 'Debitis ab ipsum a autem sit ducimus voluptatem, quos. Consequatur non eum facilis, ex repellendus, vitae debitis.'
                },
                {
                    id: 2,
                    icon: 'bi bi-support',
                    title: 'Read On Any Device',
                    text: 'Debitis ab ipsum a autem sit ducimus voluptatem, quos. Consequatur non eum facilis, ex repellendus, vitae debitis.'
                },
                {
                    id: 3,
                    icon: 'bi bi-rocket2',
                    title: 'Marketing Goals',
                    text: 'Debitis ab ipsum a autem sit ducimus voluptatem, quos. Consequatur non eum facilis, ex repellendus, vitae debitis. '
                }
            ]
        }
    }
    render() {
        return (
        <section className="about-section section-padding dark-bg-light" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-img">
                            <img src="assets/images/banner/book.png" alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="section-heading">
                            <span className="subheading">50% discount on early purchase</span>
                            <h3 className="heading-title">Everything in your hand using mobile or tablet</h3>
                            <p>This lovely, well-written book is concerned with creating typography and is essential for professionals.</p>
                        </div>

                        {
                            this.state.about.map((data,i) => (
                                <div className="about-text-block" key={i}>
                                    <i className={data.icon}></i>
                                    <h4>{data.title}</h4>
                                    <p>{data.text} </p>
                                </div>
                            ))
                        }
                        
                        <Link to="#" className="btn btn-main-2"><i className="fa fa-check me-2"></i>More About Support</Link> 
                    </div>
                </div>
            </div>
        </section>  
        );
    }
}

export default About;
