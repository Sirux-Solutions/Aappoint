import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    constructor(props){
        super(props);
        this.state = {
            listItem: [
                {
                    id: 1,
                    icon: 'fa fa-check',
                    title: 'Learn From Expert in details',
                },
                {
                    id: 2,
                    icon: 'fa fa-check',
                    title: '16 Chapters included',
                },
                {
                    id: 3,
                    icon: 'fa fa-check',
                    title: 'eBook includes iBooks, PDF & ePub versions',
                },
                {
                    id: 4,
                    icon: 'fa fa-check',
                    title: 'Audio book with every purchase',
                },
            ]
        }
    }
    render() {
        return (
            <section className="banner pb-80 dark-bg">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-12 col-lg-6">
                            <div className="banner-content ">
                                <span className="subheading">50% discount on early purchase</span>
                                <h1>Solve your daily life problem in 1 minute</h1>
                                <ul>
                                    {
                                    this.state.listItem.map(data => (
                                        <li key={data.id}><i className={data.icon}></i> {data.title}</li>
                                        ))
                                    }
                                </ul>
                                <Link to="#" className="btn btn-main">Get this book at 29$</Link>  
                                <p>Interested in free chapter? <Link to="#">Get it now</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-img">
                                <img src="assets/images/banner/book.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div> 
                </div> 
            </section>

        );
    }
}

export default Banner;

