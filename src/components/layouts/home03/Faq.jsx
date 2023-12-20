import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Accordion} from 'react-bootstrap';


class Faq extends Component {
    render() {
        return (
                    
        <section className="faq section-padding dark-bg-light" id="faq">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-heading center-heading text-center mb-60">
                            <h3 className="heading-title">Frequently Asked Questions</h3>
                            <p>This book is concerned with creating typography and is essential for professionals who regularly work for clients.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <Accordion className="panel-group">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header ><i className="more-less fa fa-plus"></i>How to contact with Customer Service?</Accordion.Header>
                                <Accordion.Body className="panel-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry 
                                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1" className="panel-group">
                                <Accordion.Header ><i className="more-less fa fa-plus"></i>New update fixed all bug and issues?</Accordion.Header>
                                <Accordion.Body className="panel-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat 
                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" className="panel-group">
                                <Accordion.Header ><i className="more-less fa fa-plus"></i>Website reponse taking time, how to improve?</Accordion.Header>
                                <Accordion.Body className="panel-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat 
                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3" className="panel-group">
                                <Accordion.Header ><i className="more-less fa fa-plus"></i>How to purchase the book online?</Accordion.Header>
                                <Accordion.Body className="panel-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat 
                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className="col-lg-6">
                        <Accordion className="panel-group">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="panel-title "><i className="more-less fa fa-plus"></i>How to contact with Customer Service?</Accordion.Header>
                                <Accordion.Body className="panel-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry 
                                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1" className="panel-group">
                                <Accordion.Header ><i className="more-less fa fa-plus"></i>New update fixed all bug and issues?</Accordion.Header>
                                <Accordion.Body className="panel-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat 
                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" className="panel-group">
                                <Accordion.Header ><i className="more-less fa fa-plus"></i>Website reponse taking time, how to improve?</Accordion.Header>
                                <Accordion.Body className="panel-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat 
                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3" className="panel-group">
                                <Accordion.Header ><i className="more-less fa fa-plus"></i>How to purchase the book online?</Accordion.Header>
                                <Accordion.Body className="panel-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat 
                                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    
                    <div className="mt-5 text-center">
                        <Link to="#"  className="btn btn-main-2">Get it now on amazon</Link>
                    </div>
                </div>
            </div>
        </section>

        );
    }
}

export default Faq;
