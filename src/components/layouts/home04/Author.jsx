import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Author extends Component {
    constructor(props){
        super(props);
        this.state = {
            listItem: [
                {
                    id: 1,
                    icon: 'fa fa-check',
                    title: ' Achieved 10+ awarded',
                },
                {
                    id: 2,
                    icon: 'fa fa-check',
                    title: 'Very passionate about writting',
                },
                {
                    id: 3,
                    icon: 'fa fa-check',
                    title: ' Most Popular writter in the year',
                },
            ]
        }
    }
    render() {
        return (
            <section className="author-section section-padding dark-bg-light" id="author">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">About the author</h3>
                                <p>This book is concerned with creating typography and is essential for professionals who regularly work for clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="auhtor-img mb-4 mb-lg-0">
                                 <img src="assets/images/bg/author.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="section-heading mb-0">
                                <h3 className="heading-title">Michale John</h3>
                                <p className='lead'>My name is john . Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, professionals who regularly</p>
                                <p>This lovely, well-written book is concerned with creating typography and is essential for professionals who regularly work for clients.</p>
                            </div>

                            <div className="author-desc">
                                <ul className="list-unstyled">
                                    {
                                    this.state.listItem.map((data,i) => (
                                        <li key={i}><i className={data.icon}></i> {data.title}</li>
                                        ))
                                    }
                                </ul>
                                <p>Reach Me on <Link to="#">Twiiter</Link> or <Link to="#">Facebook</Link> or <Link to="#">Linkedin</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        );
    }
}

export default Author;
