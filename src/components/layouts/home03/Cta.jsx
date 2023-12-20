import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cta extends Component {
    render() {
        return (
        <section className="cta pb-100 dark-bg-light">
            <div className="container">
                <div className="row justify-content-center cta-inner bg-white-50">
                    <div className="col-lg-8">
                        <div className="cta-content">
                            <span className="subheading2">Subscribe now</span>
                            <h2 className="heading-title">Get a free chapter of this book</h2>
                            <form action="#" className="subsribe">
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" placeholder="Email Address"/>
                                </div>
                                <Link to="#" className="btn btn-main w-100">Subscribe<i className="fa fa-angle-right ms-2"></i></Link>  
                                <p>* eBook includes iBooks, PDF & ePub versions</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        );
    }
}

export default Cta;
