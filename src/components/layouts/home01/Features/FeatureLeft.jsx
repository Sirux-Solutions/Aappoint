import React, { Component } from 'react';

class FeatureLeft extends Component {
    constructor(props){
        super(props);
        this.state = {
            collLeft: [
                {
                    id: 1,
                    icon: 'fa fa-check',
                    title: 'How to improve yourself',
                    text: 'Well-written book is concerned with creating typography and is essential for professionals who regularly'
                },
                {
                    id: 2,
                    icon: 'fa fa-check',
                    title: 'Utilize time productively',
                    text: 'Well-written book is concerned with creating typography and is essential for professionals who regularly'
                },
                {
                    id: 3,
                    icon: 'fa fa-check',
                    title: 'How to think creatively',
                    text: 'Well-written book is concerned with creating typography and is essential for professionals who regularly '
                }
            ]
        }
    }

    render() {
        return (
            <div className="topic-items">
            {
                    this.state.collLeft.map((data,i) => (
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

export default FeatureLeft;
