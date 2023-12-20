import React, { Component } from 'react';

class PricingOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            listItem: [
                {
                    id: 1,
                    icon: 'fa fa-circle',
                    title: '1 Free Chapter',
                },
                {
                    id: 2,
                    icon: 'fa fa-circle',
                    title: 'PDF version',
                },
                {
                    id: 3,
                    icon: 'fa fa-circle',
                    title: 'Free Subscripion',
                },
                {
                    id: 4,
                    icon: 'fa fa-circle',
                    title: 'No hardcover',
                },
            ]
        }
    }
   

    render() {
        return (

            <ul className="pricing-features">
                {
                this.state.listItem.map((data,i) => (
                    <li key={i}><i className={data.icon}></i> {data.title}</li>
                    ))
                }
            </ul>
        );
    }

}

export default PricingOne;
