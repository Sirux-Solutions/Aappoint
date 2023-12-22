import React, { Component } from 'react';

class FeatureLeft extends Component {
    constructor(props){
        super(props);
        this.state = {
            collLeft: [
                {
                    id: 1,
                    icon: 'fa fa-check',
                    title: 'คลินิกทันตกรรม',
                    text: ''
                },
                {
                    id: 2,
                    icon: 'fa fa-check',
                    title: 'คลินิกรักษาสัตว์เลี้ยง',
                    text: ''
                },
                {
                    id: 3,
                    icon: 'fa fa-check',
                    title: 'คลินิกเวชกรรม ตกแต่งเสริมความงาม',
                    text: ''
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
                                <h4 className='pt-2'>{data.title}</h4>
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
