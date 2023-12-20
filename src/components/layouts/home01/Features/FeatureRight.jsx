import React, { Component } from 'react';

class FeatureRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            collRight: [
                {
                    id: 1,
                    icon: 'fa fa-check',
                    title: '10 tips to improve yourself',
                    text: 'Well-written book is concerned with creating typography and is essential for professionals who regularly'
                },
                {
                    id: 2,
                    icon: 'fa fa-check',
                    title: 'Powerful tips & tricks',
                    text: 'Well-written book is concerned with creating typography and is essential for professionals who regularly'
                },
                {
                    id: 3,
                    icon: 'fa fa-check',
                    title: 'Grow your personality',
                    text: 'Well-written book is concerned with creating typography and is essential for professionals who regularly '
                }
            ]
        }
    }

    render() {
        return (
            <div className="topic-items">
                {
                    this.state.collRight.map((data,i)=> (
                        <div className="topic-item" key={i}>
                            <div className="icon-box">
                                <i className={data.icon}></i>
                            </div>
                            <div className="topic-content">
                                <h4>{data.title}</h4>
                                <p>{data.text}</p>
                            </div>
                        </div>
                    
                    ))
            }
            </div>
        );
    }

}

export default FeatureRight;
